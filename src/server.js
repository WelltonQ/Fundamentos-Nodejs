import http from 'node:http'

const server = http.createServer((req, res) => {
	const { method, url } = req

	if (method === "GET" && url === "/users") {
		return res.end("Listar usuários")
	}

	if (method === "POST" && url === "/users") {
		return res.end("Criar usuário")
	}

	return res.end("Test")
})

server.listen(3333)