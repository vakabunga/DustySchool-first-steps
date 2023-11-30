const http = require('http');
const querystring = require('querystring');

const server = http.createServer(function(req,res){
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

    const [url, query] = req.url?.split('?');

    if (!query) {
		res.writeHead(404);
		res.end();
		return;
    }

    const queryParams = querystring.parse(query);

    if (!queryParams.first || !queryParams.second) {
		res.writeHead(404);
		res.end();
		return;
    }

    res.writeHead(200);
    res.write(JSON.stringify({
        result: +queryParams.first + +queryParams.second
    }));

	res.end();
});

server.listen(3000);
