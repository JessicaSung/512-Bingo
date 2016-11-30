$(document).ready(function() {

  // ------sign in/up button clicks--------
  $('#signIn').on('click', function() {
    slideToSign('#signInView');
  });

  $('#signUp').on('click', function() {
    slideToSign('#signUpView');
  });

  // animates sliding sign in and sign up divs
  function slideToSign(view) {
    $('#landing-corner-logo').fadeIn('slow');
    $('#landing').animate({right: '600px'}, 'slow');
    $('#landing').hide('slow');
    $(view).show('slow');
    $(view+' > .landing-form').animate({left: '0px'}, 'slow');
  }

  // --------toggle between sign in/up-------
  $('#toggleSignIn').on('click', function() {
    toggleSignView('#signUpView', '#signInView');
  });

  $('#toggleSignUp').on('click', function() {
    toggleSignView('#signInView', '#signUpView');
  });

  // controls sliding animation between sign in and sign up
  function toggleSignView(current, next) {
    $(current).animate({left: "-600px"}, 'slow');
    $(current).hide('slow');
    slideToSign(next);
  }

  // --------landing home------------------
  // show/hide landing when logo clicked
  $('#landing-corner-logo').on('click', function() {
    $('#signInView').hide();
    $('#signUpView').hide();
    $(this).hide();
    $('#landing').css('right', '0').show();
  });

  // --------sign in button-----------------
  var currentURL = window.location.origin;

  $('#signInButton').on('click', function() {
    // user sign in email and password
    var data = {
      email: $('#emailAddress').val(),
      password: $('#password').val()
    }

    // AJAX call to database
    $.post('/', data).then(function(response) {
      // if username and passowrd exists redirect to menu
      if(response) {
        window.location = currentURL + '/menu';
      } else {
        // show hide error
        $('#sign-in-error').html("*We can't find you! Please check your email and password.").show();
        setTimeout(function() {
          $('#sign-in-error').hide();
        }, 5000);

      }
    });
  });

  // -----sign up validation--------------
  // track whether there are errors
  var error = true;

  // on blur events happen when clicked out of input
  $('#emailAddressUp').on('blur', function() {
    var email = $('#emailAddressUp').val();
    // checks for @ in emaill address
    var atSign = email.search(/@/g);

    // returns -1 if no @ sign
    if(atSign < 0) {
      error = true;
      // show form error message
      $('.form-error').html('*Please enter a valid email!').show()
      //  hide error message after 5 seconds
      setTimeout(function () {
        $('.form-error').hide()
      }, 5000);
    } else {
      // if @ exists sets error to false
      error = false;
    }
  });

  $('#confirmPassword').on('blur', function() {
    // password and confirm password entries
    var password1 = $('#passwordUp').val();
    var password2 = $('#confirmPassword').val();

    // if passwords don't match, sets error to true
    if(password1 != password2) {
      error = true;
      $('#sign-up-error').html('*Your passwords do not match!').show()
      setTimeout(function () {
        $('#sign-up-error').hide()
      }, 5000);
    } else {
      error = false;
    }
  });

  //  gets data and makes post request on div click
  $('#signUpButton').on('click', function() {
    var data = {
      email: $('#emailAddressUp').val(),
      password: $('#passwordUp').val()
    }

    // if no errors in form, make post request
    if(error == false) {
      // AJAX CALL
      $.post('/signup', data).then(function(response) {
        console.log(response);
        if(response) {
          // if user does not exists in database,
          // add new user, send true, and redirect to menu
          window.location = currentURL + '/menu';
        } else {
          // show error to prompt sign in (response is false)
          $('#sign-up-error').html('*You already have an account! Please sign in.').show();
          setTimeout(function () {
            $('#sign-up-error').hide();
          }, 5000);
        }
      });
    }
  });


});