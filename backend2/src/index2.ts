const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:4200"],
}
const bodyParser = require('body-parser');


app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));


const filePath = path.join(__dirname, 'people.json');

import { IPerson } from './IPerson';

let contactList: IPerson[] = [];

fs.readFile(filePath, (err: any, data: any) => {
    if (err) {
        console.error('Unable to file : ' + filePath);
    } else {
        contactList = JSON.parse(data);
    }
});

// set the port
const port = process.env.PORT || 3000;

// set the port
app.get('/', (req: any, res: any) => {
    res.status(200);
    return res.json(contactList);
});
// Return the person based on firstName.
app.get('/:firstName', (req: any, res: any) => {
    const person = contactList.find(c => c.firstName == req.params.firstName);
    if (person) {
        res.status(200);
        return res.json(person);
    }
    res.status(404);
    return res.json({ error: `Person with firstName:${req.params.firstName} not found.` });
});

app.post('/', (req: any, res: any) => {
    const person = contactList.push(JSON.parse(JSON.stringify(req.body)));
    if (person) {
        res.status(200);
        return res.json(person);
    }
    res.status(404);
    return res.json({ error: `Person with firstName:${req.params.firstName} not found.` });
});

app.put('/', (req: any, res: any) => {
    const person = contactList.find(c => c.firstName == JSON.parse(JSON.stringify(req.body)).firstName);
    if (person) {
        let newvalue = contactList.indexOf(person);
        contactList[newvalue] = JSON.parse(JSON.stringify(req.body));
        res.status(200);
        return res.json(person);
    }
    res.status(404);
    return res.json({ error: `Person with firstName:${req.params.firstName} not found.` });
});

app.delete('/', (req: any, res: any) => {
    const person = contactList.find(c => c.firstName == JSON.parse(JSON.stringify(req.body)).firstName);
    if (person) {
        let newvalue = contactList.indexOf(person);
        contactList.splice(newvalue);
        res.status(200);
        return res.json(person);
    }
    res.status(404);
    return res.json({ error: `Person with firstName:${req.params.firstName} not found.` });
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});



