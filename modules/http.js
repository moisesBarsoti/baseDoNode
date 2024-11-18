const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // if (req.url === '/home') res.end('<h1>Teste<h1>');

    if (req.url === '/user') {
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