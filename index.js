const http2 = require("http2");

const server = http2.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  res.write("First part of the response\n");
  res.write("Second part of the response\n");

  res.end("Final part of the response\n");
});

const port = process.env.PORT||4000
server.listen(port, () => {
  console.log("HTTP/2 server running on port 3000");
});
