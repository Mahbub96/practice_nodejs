const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello programmers!');
        res.write(' how are you today ?');
        res.end();
    } else if (req.url === '/about') {
        res.write('this is about page');
        res.end();
    } else {
        res.write('not fount ');
        res.end();
    }
});

server.listen(3000);

// server.on('connection', () => {
//     console.log('new Connection');
// });

console.log('listening on port 3000');
