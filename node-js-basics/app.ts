import * as fs from "node:fs";
import * as http from "node:http";

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<body>");
		res.write("<form action='message' method='POST'>");
		res.write("<input type='text'/><button>Send Post Request</button>");
		res.write("</form>");
		res.write("</body>");
		res.write("</html>");
		return res.end();
	}

	if (url === "/message" && method === "POST") {
		fs.writeFileSync("message.txt", "response triggered");
		res.statusCode = 302;
		res.setHeader("Location", "/");
	}
});

server.listen(3000);
