const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
const hbs = require('hbs');

const puerto = process.env.PORT || 3000;

hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', function(req, res) {

    res.render('home')
});

app.get('/about', function(req, res) {

    res.render('about')
});

app.listen(puerto, () => {
    console.log(`Escuchando el puerto ${puerto}`);
});