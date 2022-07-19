const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.get('/', express.static(path.join(__dirname, 'public')));

app.get('/api/ip', async (req, res) => {
	const ip = res.socket.remoteAddress;
	res.status(200).send({ip: ip});
})

app.get('/api/server/', async (req, res) => {
	fetch("http://127.0.0.1:1212").then(fres => fres.json()).then(data => {
		res.send(data)
	})
})

app.get('/api/watchdog/', async (req, res) => {
	fetch("http://127.0.0.1:5000").then(fres => fres.json()).then(data => {
		res.send(data)
	})
})

app.get('/api/ping', async (req, res) => {
	res.status(200).send({"message": "Pong."});
})

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
})