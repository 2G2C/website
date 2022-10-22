const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.get('/', express.static(path.join(__dirname, 'public')));

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port ${port}`);
})
