const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

let stringify = require('json-stringify-safe');

const cors = require("cors");
const corsOptions = {
    origin:['http://localhost:4200']
}
app.use(cors(corsOptions));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

const fileName = '../data/list.json';
const filePath = path.join(__dirname, fileName);

// Define how we're going to format the data
import { IItem, IList, IDataPacket, OpCodes } from '../../src/app/items/item';


// the local variable to store the data
// let contactList: IPerson[] = [];
let lol: IList[] = [];

// Load the data from the file into the local variable
fs.readFile(filePath, (err: any, data: any) => {
    if (err) {
        console.error('Unable to file : ' + filePath);
    } else {
        lol = JSON.parse(data);
//        lol = lol.sort((a, b) => (a.id < b.id) ? -1 : 1);
    }
});

// set the port
const port = process.env.PORT || 4201;

// Get with no parameters, return the list of list names
app.get('/', (req: any, res: any) => {
    console.log("Get request received: ", stringify(req.params));
    let nameMetadata:IList[] = JSON.parse(JSON.stringify(lol));

    // Return just the metadata
    nameMetadata.forEach(function(val){
        val.items = [];
    })

    console.log("Returning " + JSON.stringify(nameMetadata));
    res.status(200);
    return res.json(JSON.stringify(nameMetadata));
});

// Get with listname parameter to return all items from a singular list
app.get('/:listname', (req: any, res: any) => {
    console.log("Get:listname request received: ", stringify(req.params));
    if(req.params.listname){
        let subList = lol.find(l => l.listname == req.params.listname);
        console.log("List found: " + JSON.stringify(subList));
        if (subList){
            res.status(200);
            console.log("Returning " + JSON.stringify(subList));
            return res.json(subList);
        }
    }
    console.log("Returning 404 error.");
    res.status(404);
    return res.json({error: 'No list with name: ' + res.params.listname + ' found!'});
});

// Post endpoint to add n
app.post('/', (req: any, res: any) => {
    let newTransfer:IDataPacket =  JSON.parse(JSON.stringify(req.body)) as IDataPacket;

    console.log("POST xfer: " + JSON.stringify(req.body));

    switch(newTransfer.opcode)
    {
        case OpCodes.AddItem:{
            let subList:IList = lol.find(l => l.listname == newTransfer.listName) as IList;
            subList.items.push(newTransfer.item as IItem);
            console.log("addItem: " + JSON.stringify(subList));
            break;
        }
        case OpCodes.AddList:{
            lol.push(newTransfer.item as IList);
            break;
        }
        case OpCodes.UpdateListMetaData:{
            let subList:IList = lol.find(l => l.listname == newTransfer.listName) as IList;
            let newList:IList = newTransfer.item as IList;

            subList.listname = newList.listname;
            subList.listid = newList.listid;
            subList.listaddress = newList.listaddress;
            subList.coverimageurl = newList.coverimageurl;
            break;
        }
        default: {
            console.log("Unrecognized OpCode: " + newTransfer.opcode);
            res.status(404); // Deliberately chose 405 - Method Not Allowed
            return res.json({ error: `unrecognized opcode:${newTransfer.opcode}.` });    
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(lol, null, 4));

    return res.sendStatus(200);
});

// Start listening
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
