const { error } = require('console');
const fs = require('fs');
const path = require('path');

// create folder

fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if (error) return console.log('Erro: ', error);
    return console.log('Folder create successufully');
});

// create file
fs.writeFile(path.join(
    __dirname, '/teste', 'teste.txt'), 'Hello world!',
    (error) => {
        if (error) return console.log('Deu erro', error)
        return console.log('File create successufully!');
    }
);


// add a file
// fs.appendFile(path.join(
//     __dirname, '/teste', 'teste.txt'), 'Hello HTML', (error) => {
//         if (error) return console.log('Failed')
//         return console.log('Successufully!')
//     });


// Read file
fs.readFile(path.join
    (__dirname, '/teste', 'teste.txt'), 'utf8',
    (error, data) => {
        if (error) return console.log('Failed read', error);
        return console.log(data);
    });