const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'))

app.get('/', express.static('public'));

app.get('/api/ip', async (req, res) => {
	const ip = res.socket.remoteAddress;
	res.status(200).send({ip: ip});
})

app.get('/api/ping', async (req, res) => {
	res.status(200)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`)
})