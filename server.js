var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    bodyParser = require("body-parser"),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'jswebui')));
app.use("/", express.static(__dirname + "/statistics/dashboard"));


// Desktop requests

app.get('/', function(req, res) {
    res.sendfile('./jswebui/index.html');
});

http.listen(8080, function() {
    console.log("Connected & Listen to port 8080");
});