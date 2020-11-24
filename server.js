const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'luCho'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/', (req, res) => {
//     //res.send('Hola mundo')
//     let salida = {
//         nombre: 'luis',
//         edad: 31,
//         url: req.url
//     };

//     res.send(salida);
// });

app.listen(3000, () => {
    console.log(`Escuchando  peticiones por el puerto ${ port }`);
});