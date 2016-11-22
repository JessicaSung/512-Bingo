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

})
