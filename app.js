var express = require('express');
var todoController = require('./controllers/todoController');
var xsvr = express();

//set up template engine
xsvr.set('view engine', 'ejs');

//static files
xsvr.use( express.static('./public') ); //no specific route specified... thus, all requests routed to ./public

//fire controllers (ie. call functions)
todoController( xsvr ); //passing it the express server

//listen to port
xsvr.listen(3000);
console.log('xsvr listening on 3000');