const http = require('http');
const url = require('url');

const handleRequest = (req, res) => {
    const parsedUrl = url.parse(req.url);
    if ('/' === parsedUrl.path) {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('Hello World');
    }
};

const server = http.createServer(handleRequest);
server.listen(8000);