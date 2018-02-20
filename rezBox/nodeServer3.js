// node server:

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('chewy was asked for the URL: ' + req.url);

	if(req.url === '/'){
			var myReadStream = fs.createReadStream(__dirname + '/../index.html', 'utf8');
			//var myDoc = '';

			res.writeHead(200, {'Content-Type': 'text/html'});

			myReadStream.on('data', function( chunk ){
				console.log('chunk time');
				//console.log( chunk );
				res.write( chunk );
				res.end(); // it would appear you write and end each chunk... ie. "written/sent" to browser in chunks too!

			});
	}else if(req.url === '/data/dummy.html'){

		  //$.get('data/dummy.html', function( data ){ console.log( data); $('body').append( data ) });

			var myReadStream = fs.createReadStream(__dirname + '/../data/dummy.html', 'utf8');
			//var myDoc = '';

			res.writeHead(200, {'Content-Type': 'text/html'});

			myReadStream.on('data', function( chunk ){
				console.log('jquery chunk');
				//console.log( chunk );
				res.write( chunk );
				res.end(); // it would appear you write and end each chunk... ie. "written/sent" to browser in chunks too!

			});
	}
});

server.listen(3000, '127.0.0.1');
console.log('chewy on 3000');
