// express server:

var express = require('express');

var xsvr = express();

xsvr.get('/', function(req, res){
	res.send('black n yellow');
});

xsvr.listen(3000);
console.log('chewy xsvr listening on 3000');
