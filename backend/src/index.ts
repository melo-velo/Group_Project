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
app.use(bodyParser.json({limit: '50mb'}));
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
        lol.forEach(function(list){
            console.log("processing list: " + list.listname);
            list.items.forEach(function(item) {
                let newIID = Math.floor(Math.random() * 5000)+1;
                console.log("Adding IID: " + newIID.toString() + " to: " + item.productName);
                (item as any).iid = newIID;
            });
        });
        console.log("lol file updated on load.");
        fs.writeFileSync(filePath, JSON.stringify(lol, null, 4));
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

    console.log("Returning " + JSON.stringify(nameMetadata).slice(0,25));
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
            console.log("Returning " + JSON.stringify(subList).slice(0,25));
            return res.json(subList);
        }
    }
    console.log("Returning 404 error.");
    res.status(404);
    return res.json({error: 'No list with name: ' + res.params.listname + ' found!'});
});

// Get with listname parameter to return all items from a singular list
app.get('/:listname/:itemid', (req: any, res: any) => {
    console.log("Get:listname:itemid request received: ", stringify(req.params));
    if(req.params.listname){
        let subList = lol.find(l => l.listname == req.params.listname);
        console.log("List found: " + JSON.stringify(subList));
        if (subList){
            let item = subList.items.find(i => i.iid == req.params.itemid);
            res.status(200);
            console.log("Returning " + JSON.stringify(item).slice(0,25));
            return res.json(item);
        }
    }
    console.log("Returning 404 error.");
    res.status(404);
    return res.json({error: 'No list with name: ' + res.params.listname + ' found!'});
});

//app.get('/', (req: any, res: any) => {
//    console.log("Get request received: ", stringify(req.params));
//    let newTransfer:IDataPacket =  JSON.parse(JSON.stringify(req.body)) as IDataPacket;
//    if ('listname' in )
//});

// // Get with listname parameter to return all items from a singular list
// app.get('/:listname/:iid', (req: any, res: any) => {
//     console.log("Get:listname:iid request received: ", stringify(req.params));
//     if(req.params.listname){
//         let subList = lol.find(l => l.listname == req.params.listname);
//         console.log("List found: " + JSON.stringify(subList));
//         if (subList){
//             let item = subList.items.find(i => i.iid == req.params.iid);

//             res.status(200);
//             console.log("Returning " + JSON.stringify(item));
//             return res.json(item);
//         }
//     }
//     console.log("Returning 404 error.");
//     res.status(404);
//     return res.json({error: 'No list with name: ' + res.params.listname + ' found!'});
// });

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
        case OpCodes.GetOneItem: {
            let subList:IList = lol.find(l => l.listname == newTransfer.listName) as IList;
            let item:IItem = subList.items.find(i => i.iid == newTransfer.item) as IItem;

            // Retunring here is fine since we don't need to write the list out
            res.status(200);
            return res.json(item);
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

//TODO Put command for edits to existing list items

//TODO Delete command to get rid of items
// Bonus endpoint
app.delete('/:id', (req: any, res: any) => {
    // if (req.params.id){
    //     let person = contactList.find(c => c.id == req.params.id);
    //     if (person){
    //         let perIdx = contactList.indexOf(person);
    //         contactList.splice(perIdx, 1);
    //         return res.sendStatus(200);    
    //     }
    // }
    res.status(404);
    return res.json({ error: `Person with id:${req.params.id} not found.` });
});

// Start listening
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
