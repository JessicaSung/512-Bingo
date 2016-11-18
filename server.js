var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// express app settings
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(methodOverride('_method'));

// setting up view engine (handlebars)
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// import routes
var routes = require('./controllers/controller.js');
app.use('/', routes);

// set up local host
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('listening on port: '+PORT);
});
