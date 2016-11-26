var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var jwt  = require('jsonwebtoken'); // JSON Web Token Package for authentication
var nJwt = require('njwt');

var app = express();

// express app settings
app.set('jwtSecret', "BINGOGAME"); //sets webtoken secret
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
app.post('/authenticate', function(){
	var body, claim;

	// body = yield parse(this);
	// console.log(body);
	//if (body.email ==='Erin'&& body.password==='12345'){
		claim ={
			userId:1
		};

		var jwtVar = jwt.create(claim, app.get('jwtSecret'));
		console.log(jwtVar);
/*
		this.body={
			token:jwt.sign(claim,secret)
		};	
*/
	/*}
	else{
		this.throw(401,"wrong user id or password");
	}	*/	
})
// import routes
var routes = require('./controllers/controller.js');
app.use('/', routes);

// set up local host
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('listening on port: '+PORT);
});

var claim ={
			userId:1
		};

var jwtVar = nJwt.create(claim, app.get('jwtSecret'));
console.log(jwtVar);
