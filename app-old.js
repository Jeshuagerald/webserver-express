const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'luis',
            edad: 31,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8888);

console.log('Escuchando el puerto 8080');