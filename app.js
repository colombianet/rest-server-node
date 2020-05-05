const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', function(req, res) {

    res.render('home')
});

app.get('/about', function(req, res) {

    res.render('about')
});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});