// Dependencias
var express = require ('express');
var app = express ();
var path = require ('path');

app.set ('views', path.join (__dirname, 'views'));
app.set ('view engine', 'ejs');

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'

// Serve static files
app.use (express.static (__dirname + '/js'));
app.use(expressLayouts);

// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 5000));

var parser = require(__dirname + '/js/csv.js')

// instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.render ('index', { title: "CSV Analyzer"} );
});

app.post('/', function (req, res) {
	var resultado = parser.calculate(req.body.original);
	res.render ('csv', { title: "CSV Analyzer", resultados: resultado} );
});

	app.listen (app.get ('port'), function () {
	  console.log ('Aplicación Node corriendo en localhost: ' + app.get ('port'));
});
