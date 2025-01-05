import * as http from "node:http";

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<body><h1>Hello from The Deno Server</h1></body>");
	res.write("</html>");
	res.end();
});

server.listen(3000);
