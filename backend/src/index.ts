// SEIS-622-01
// Guy T Lawrence
// Week 9 Contact Tracker application
// This program implements a sorted contact list using ExperssJS
// Contacts must be ID unique and and the list is sorted by ID
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

const filePath = path.join(__dirname, 'people.json');

// Define how we're going to format the data
import { IPerson } from './IPerson';


// the local variable to store the data
let contactList: IPerson[] = [];

// Load the data from the file into the local variable
fs.readFile(filePath, (err: any, data: any) => {
    if (err) {
        console.error('Unable to file : ' + filePath);
    } else {
        contactList = JSON.parse(data);
        contactList = contactList.sort((a, b) => (a.id < b.id) ? -1 : 1);
    }
});

// set the port
const port = process.env.PORT || 3000;

// Req 4 - return all contacts on a blank GET call
app.get('/', (req: any, res: any) => {
    res.status(200);
    return res.json(contactList);
});

// Req 5 Return the person based on id.
app.get('/:id', (req: any, res: any) => {
    if (req.params.id){
        let person = contactList.find(c => c.id == req.params.id)
        console.log(person);
        if (person) {
            res.status(200);
            return res.json(person);
        }
    }
    res.status(404);
    return res.json({ error: `Person with id:${req.params.id} not found.` });
});

// Req 6 - Add new contact to the list. ID must be unique
// In imporvement would be to do an insertion sort instead of an insertion and then a sort
app.post('/', (req: any, res: any) => {
    let newPerson =  JSON.parse(JSON.stringify(req.body));
    let person = contactList.find(c => c.id == newPerson.id);
    if (person) {
        console.log("Method not allowed: " + person);
        res.status(405); // Deliberately chose 405 - Method Not Allowed
        return res.json({ error: `Person with id:${person.id} already exists.` });
    }
    console.log("Adding new contact: " + newPerson);
    contactList.push(newPerson);
    contactList = contactList.sort((a, b) => (a.id < b.id) ? -1 : 1);
    return res.sendStatus(200);
});

// Req 7 - Edit an existing contact
app.put('/', (req: any, res: any) => {
    let newPerson =  JSON.parse(JSON.stringify(req.body));
    let person = contactList.find(c => c.id == newPerson.id);
    if (person) {
        let perIdx = contactList.indexOf(person);
        contactList[perIdx] = newPerson;
        return res.sendStatus(200);    
    }
    res.status(404);
    return res.json({ error: `Person with id:${req.query.id} not found.` });
});

// Req 8 - Remove a contact from the list. There are 2 methods to delete
// First, the entire contact can be passed in and it that contact ID is found
// the contact will be deleted. 
// Second, if the ID is passed in, that ID will be removed
app.delete('/', (req: any, res: any) => {
    let newPerson =  JSON.parse(JSON.stringify(req.body));
    let person = contactList.find(c => c.id == newPerson.id);
    if (person) {
        let perIdx = contactList.indexOf(person);
        contactList.splice(perIdx, 1);
        return res.sendStatus(200);    
    }    
    res.status(404);
    return res.json({ error: `Person with id:${newPerson.id} not found.` });
});

// Bonus endpoint
app.delete('/:id', (req: any, res: any) => {
    if (req.params.id){
        let person = contactList.find(c => c.id == req.params.id);
        if (person){
            let perIdx = contactList.indexOf(person);
            contactList.splice(perIdx, 1);
            return res.sendStatus(200);    
        }
    }
    res.status(404);
    return res.json({ error: `Person with id:${req.params.id} not found.` });
});

// Start listening
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
