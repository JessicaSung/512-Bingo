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

})
