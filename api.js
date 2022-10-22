const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
app.use(cors())

app.get('/', async (req, res) => {
    res.redirect("https://421034.xyz");
});

app.post('/', async (req, res) => {
    res.status(200).send({"message": "hi buddy"});
})


app.get('/ping', async (req, res) => {
    res.status(200).send({"message": "Pong."});
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port ${port}`);
});
