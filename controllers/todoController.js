var dbcreds = require('../dbcreds');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extend: false});
console.log( dbcreds.pw );
mongoose.connect('mongodb://'+ dbcreds.user +':' + dbcreds.pw + '@ds051913.mlab.com:51913/rezdb');

var data = [{item: 'get blue milk'}, {item: "re-attach 3PO's arm"}, {item: 'pickup power converters at toshi station'}];

module.exports = function(xsvr){

	xsvr.get('/todo', function(req, res){
		res.render('todo', {todos: data});
		console.log('todo called');
	});

	xsvr.post('/todo', urlencodedParser, function(req, res){
		data.push(req.body);
		res.json(data);
	});

	xsvr.delete('/todo/:item', function(req, res){
		data = data.filter(function(todo){
			return todo.item.replace(/ /g, '-') !== req.params.item;
		});
		res.json(data);
	});

};
