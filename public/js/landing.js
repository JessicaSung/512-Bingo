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
  var currentURL = window.location.origin;

  $('#signInButton').on('click', function() {
    var data = {
      email: $('#emailAddress').val(),
      password: $('#password').val()
    }

    // AJAX call to database
    $.post('/', data).then(function(response) {
      console.log(response);
      if(response) {
        window.location = currentURL + '/menu';
      } else {
        $('#sign-in-error').html("*We can't find you! Please check your email and password.").show();
        setTimeout(function() {
          $('#sign-in-error').hide();
        }, 5000);

      }
    })
  })

  // -----sign up validation--------------
  var error = true;

  $('#emailAddressUp').on('blur', function() {
    var email = $('#emailAddressUp').val();
    var atSign = email.search(/@/g);

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

    if(password1 != password2) {
      error = true;
      $('#sign-up-error').html('*Your passwords do not match!').show()
      setTimeout(function () {
        $('#sign-up-error').hide()
      }, 5000);
    } else {
      error = false;
    }
  })

  $('#signUpButton').on('click', function() {
    var data = {
      email: $('#emailAddressUp').val(),
      password: $('#passwordUp').val()
    }


    if(error == false) {
      // AJAX CALL
      $.post('/signup', data).then(function(response) {
        console.log(response);
        if(response) {
          window.location = currentURL + '/menu';
        } else {
          $('#sign-up-error').html('*You already have an account! Please sign in.').show();
          setTimeout(function () {
            $('#sign-up-error').hide();
          }, 5000);
        }
      })
    }
  })


})
