const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Hello, world! This is a basic Node.js server.");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
