//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var app = express();

//includes to the backend API
const route = require('./routes/route.js');
const users = require('./routes/users.js');
const image = require('./routes/image.js');

//port number for backend
const port = 3000;

//Connect to MongoDB
mongoose.connection.openUri('mongodb://abdallahshaban:whatyousaid@ds149433.mlab.com:49433/picture-app');


//connection successful message
mongoose.connection.on('connected', ()=>{
	console.log('Connected to DB');
})

//connection unsuccessful message
mongoose.connection.on('error', ()=>{
	if(err)
	{
		console.log('error m3allem' + err);
	}
});

app.use(function(req, res, next) {
	//set headers to allow cross origin request.
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//This is needed to determine the relative path used for res.send
app.use(express.static(path.join(__dirname, 'public')));


//sets the path of the included backend file
app.use('/api', route);
app.use('/users', users);
app.use('/image', image);
app.get('/',(req, res)=>{
	res.send('foobar');
});

app.listen(port,()=>{
	console.log('server started at port ' + port);

});