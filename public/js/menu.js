$(document).ready(function() {

  $('#menu').on('click', function() {
    $('.mobile-main-menu').hide();
    $('.mobile-drop-menu').fadeIn();
    $('.corner-circle').animate({
      height: '110vh',
      width: '110vw',
      borderRadius: '0'
    }, 'slow');
    $('#menu').hide();
    $('#x').show();
  })

  $('#x').on('click', function() {
    $('.mobile-drop-menu').hide();
    $('.corner-circle').animate({
      height: '150px',
      width: '150px',
      borderRadius: '100%'
    }, 'slow');
    $('.mobile-main-menu').fadeIn();
    $('#x').hide();
    $('#menu').show();
  })



})
