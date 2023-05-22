const express = require('express');
const app = express();
var http = require('http');
var fs = require('fs');

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Listening to Port: " + PORT)
})

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function(req, res) {
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    }).listen(PORT);
});