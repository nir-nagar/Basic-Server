const http = require('http');
const PORT = 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('hello');
    res.end();
});

server.listen(PORT, () => {
    console.log(`\x1b[47m  \x1b[34m server is \x1b[32m up as  \x1b[43m \x1b[31m ${PORT} \x1b[40m \x1b[37m`);
  
})



