'use strict';

const express = require('express');
const axios = require('axios');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/ip', (req, res) => {
    axios.get('https://ipinfo.io/json').then(response => {
        res.send(response.data);
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);