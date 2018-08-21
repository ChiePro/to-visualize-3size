const http = require('http');

var server = http.createServer(
    (request,response)=>{
        response.end('hello wrold');
    }
);

server.listen(3000);
console.log('Node server started');
console.log('Please access to http://localhost:3000');