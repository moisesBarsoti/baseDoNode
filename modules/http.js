const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Teste<h1>')
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Moisés',
                email: 'Teste@gmail.com',
                age: 19
            },   
            {
                name: 'Teste2',
                email: 'Teste2@gmail.com',
                age: 20
            },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`))