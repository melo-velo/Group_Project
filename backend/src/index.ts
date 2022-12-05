const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


const cors = require("cors");
const corsOptions = {
    origin:['http://localhost:4200']
}
app.use(cors(corsOptions));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

const filePath = path.join(__dirname, '../data/list.json');

// Define how we're going to format the data
import { IItem, IList } from '../../src/app/items/item';


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

    console.log("Get request received")
    let nameMetadata:IList[] = lol;

    // Return just the metadata
    nameMetadata.forEach(function(val){
        val.items = [];
    })

    console.log("Returning " + JSON.stringify(nameMetadata));
    res.status(200);
    return res.json(JSON.stringify(nameMetadata));
});


// Start listening
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
