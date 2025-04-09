// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch comments
app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Error reading comments file' });
            return;
        }
        res.send(JSON.parse(data));
    });
});