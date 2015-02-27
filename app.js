var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose');


var ItemModel = require('./server/models/index.js');

app.use(express.static(__dirname + "/public"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup the port
var port = 4000;
// note that because we're not using local login, there's no
// need for HTTPS
app.listen(port, function () {
    console.log('A server is reluctantly listening on port', port);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/items', function (req, res) {
    ItemModel.find(function(err, items) {
            res.send(items);
    });
})

app.post('/items', function (req, res) {
    var itemData = req.body;
    console.log(req.body, "post request here");
    ItemModel.create(itemData).then(function (item) {    
        res.status(200).end();
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// if we made it this far, then there was nothing
// that sent a response
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// standard error handling middleware
app.use(function (err, req, res, next) {
    err.status = err.status || 500;
    console.log('error', err);
    res.status(err.status).end();
});




module.exports = app;
