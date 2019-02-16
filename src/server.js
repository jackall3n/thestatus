'use strict';

const exec = require('child_process').exec;

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

app.get('/services', (req, res) => {
    const services = ['docker', 'couchpotato', 'deluged', 'deluge-web', 'sickrage'];

    exec(`systemctl is-active ${services.join(' ')}`, (error, stdout, stderr) => {
        const response = {};

        const statuses = stdout.split('\n').filter(s => s);

        statuses.forEach((status, index) => {
            const service = services[index];
            response[service] = {
                status
            };
        });

        res.send(response);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);