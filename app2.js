
const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === '/') {
        resp.write('hello words');
        resp.end();
    }

    if(req.url === '/api/courses') {
        resp.write(JSON.stringify([1,2,3]));
        resp.end();
    }
});  // fun fact: this server object is also an EventEmitter inheriter



server.listen(3000);  // 3000 is the port

console.log('listening on port 3000...');