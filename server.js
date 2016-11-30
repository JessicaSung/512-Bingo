// DEPENDENCIES
// ==============================================
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var jwt  = require('jsonwebtoken'); // JSON Web Token Package for authentication
var nJwt = require('njwt');
var models = require('./models');


// SETUP EXPRESS SERVER
// ==============================================
var app = express();

// express app settings
app.set('jwtSecret', "BINGOGAME"); //sets webtoken secret
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(methodOverride('_method'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// setting up view engine (handlebars)
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// import routes
var routes = require('./controllers/controller.js');
app.use('/', routes);


models.sequelize.sync();


// DEFINE PORT AND START SERVER LISTEN
// ==============================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});