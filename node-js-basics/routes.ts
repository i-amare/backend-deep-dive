import { Buffer } from "node:buffer";
import * as fs from "node:fs";
import * as http from "node:http";

const requestHandler = (
	req: http.IncomingMessage,
	res: http.ServerResponse
) => {
	const url = req.url;
	const method = req.method;

	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<body>");
		res.write("<form action='/message' method='POST'>");
		res.write(
			"<input type='text' name='message'/><button type='submit'>Send Post Request</button>"
		);
		res.write("</form>");
		res.write("</body>");
		res.write("</html>");
		return res.end();
	}

	if (url === "/message" && method === "POST") {
		console.log("req sent");
		const body: any[] = [];

		req.on("data", (chunk) => {
			console.log("data listener triggered");
			body.push(chunk);
		});

		return req.on("end", () => {
			console.log("end triggered");
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);

			fs.writeFile("message.txt", parsedBody, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/");
				return res.end();
			});
		});
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<body><h1>Hello from The Deno Server</h1></body>");
	res.write("</html>");
	res.end();
};

export default requestHandler;
