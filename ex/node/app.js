const http = require('http');
const PORT = process.env.PORT || 80;
const os = require('os');
const HOSTNAME = os.hostname();

http
  .createServer((req, res) => {
    console.log(`req : ${req.url}`);
    res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
    res.write(`Hello, World!\n`);
    res.write(`Hostname: ${HOSTNAME}`);
    res.end();
  })
  .listen(PORT);

console.log(`Server is on port : ${PORT}`);
