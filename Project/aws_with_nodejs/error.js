var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('error site');
}).listen(8080, () => {
  console.log(`Server is running at port: ${port}`);
})