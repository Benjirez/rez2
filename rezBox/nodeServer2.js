// node server: {'Content-Type': 'text/html'}

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('chewy was asked for the URL: ' + req.url); 
	res.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/../index.html', 'utf8');
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('chewy on 3000');

