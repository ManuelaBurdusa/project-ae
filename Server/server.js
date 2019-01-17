var express = require('express');
var cors = require('cors')
var serverApp = require("./js/server.js");
var authApp = require('./js/auth.js');
var projectsApp = require('./js/projects.js');
var app = express();
app.use(express.static(__dirname + './app/public'));
var port = 8000;
app.use(cors({
    origin: ['http://localhost:4201'],
    credentials: true,
}));
app.use(function (err, req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept, Authorization');
})
app.use(express.json());
app.use(express.urlencoded());
app.use('/employees', serverApp);
app.use('/auth', authApp);
app.use('/project', projectsApp);
app.listen(8000);
