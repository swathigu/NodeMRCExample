var express = require('express'), 
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	bodyParser = require('body-parser'),
	mongoose=require('mongoose'),
    winston = require('winston'),
    fs=require('fs'),
    _ = require('lodash');

var app = express();

//created file with append mode
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
winston.add(winston.transports.File, { stream: accessLogStream });
winston.info('Logger craeted');

//connecting to mongodb
mongoose.connect("connect url");
var db= mongoose.connection;
db.on('error', function(){
	winston.error("Unable to connect to DB");
});
db.once('open', function() {
  winston.info("Connected to DB");
});

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/',routes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
