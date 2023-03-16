const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200);
  res.write("<h1>Welcome to the website</h1>");
  res.end();
});

server.listen(3000, "localhost");
