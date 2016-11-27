// JWT used to create, sign, and verify auth tokens
var jwt         = require('jsonwebtoken');
var nJwt	    = require('njwt'); 
var Cookies     = require('cookies');

module.exports = function(app){ 
	

	app.post('/auth', function(req, res){
		console.log("inside app.post");
		var email = $('#email').val().trim();
    	var password = $('#password').val().trim();
    	//verify password and if it is correct get json web token
    	var token = jwt.sign(admin, app.get('jwtSecret'), {
            expiresIn: 1440 // Token is given but will expire in 24 minutes (requiring a re-login)
        });
        new Cookies(req, res).set('access_token', token, {
            httpOnly: true,
            secure: false
        });

            // for debug purposes
            console.log("Cookie Sent");
    	/*
		var claim ={
     		userId:1
    	};
		
    	var jwtVar = nJwt.create(claim, app.get('jwtSecret'));
    	console.log(jwtVar);
		*/
	});
	// app.all('*'): every entry into the site that proceeds this route file
    // (essentially, api-routes.js )
    app.all('*', function(req, res, next) {
    	console.log("inside app.all");
        var token = new Cookies(req, res).get('access_token');

        // remove after debugging
        console.log(token);

        // jwtSecret (set in server.js)
        jwt.verify(token, app.get('jwtSecret'), function(err, decoded) {
            if (err) {
                // if it's a bad cookie, tell console (debugging)
                console.log("bad cookie");
                // return error if there is one
                return res.json({success: false, message: "access denied."})
            }
            else {
                // if it's a good cookie, tell console (debugging)
                console.log("good cookie");
                next();
            }
        })
    })
}