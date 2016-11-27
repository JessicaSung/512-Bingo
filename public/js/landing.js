$(document).ready(function() {

  // ------sign in/up button clicks--------
  $('#signIn').on('click', function() {
    slideToSign('#signInView');
  })

  $('#signUp').on('click', function() {
    slideToSign('#signUpView');
  })

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
  })

  $('#toggleSignUp').on('click', function() {
    toggleSignView('#signInView', '#signUpView');
  })

  function toggleSignView(current, next) {
    $(current).animate({left: "-600px"}, 'slow');
    $(current).hide('slow');
    slideToSign(next);
  }

  // --------landing home------------------

  $('#landing-corner-logo').on('click', function() {
    $('#signInView').hide();
    $('#signUpView').hide();
    $(this).hide();
    $('#landing').css('right', '0').show();
  })

  // --------sign in button-----------------
  $('#signInButton').on('click', function() {
    var data = {
      email: $('#email').val().trim(),
      password: $('#password').val().trim()
    }
    // AJAX call to database
  })

  // -----sign up validation--------------
  var error = true;

  $('#emailAddressUp').on('blur', function() {
    var email = $('#emailAddressUp').val();
    var atSign = email.search(/@/g);
    console.log(atSign);
    if(atSign < 0) {
      error = true;
      $('.form-error').html('*Please enter a valid email!').show()
      setTimeout(function () {
        $('.form-error').hide()
      }, 5000);
    } else {
      error = false;
    }
  })

  $('#confirmPassword').on('blur', function() {
    var password1 = $('#passwordUp').val();
    var password2 = $('#confirmPassword').val();
    console.log(password1, password2);

    if(password1 != password2) {
      error = true;
      $('.form-error').html('*Your passwords do not match!').show()
      setTimeout(function () {
        $('.form-error').hide()
      }, 5000);
    } else {
      error = false;
    }
  })

  $('#signUpButton').on('click', function() {
    var data = {
      email: $('#emailUp').val(),
      password: $('#passwordUp').val()
    }

    console.log(error);
    if(error == false) {
      console.log('no error');
      // AJAX CALL
    }
  })
 

})
