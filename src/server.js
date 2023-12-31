import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
	const { method, url } = req

	if (method === "GET" && url === "/users") {
		return res
			.setHeader("Content-type", "application/json")
			.end(JSON.stringify(users))
	}

	if (method === "POST" && url === "/users") {
		users.push({
			id: 1,
			name: "Wellton",
			email: "welltonq@outlook.com",
		})

		return res
			.writeHead(201)
			.end("Created user with success!")
	}

	return res
		.writeHead(404)
		.end("Nout found")
})

server.listen(3333)