$(document).ready(function() {

  // inital AJAX call to database to get marked boxes


  // box marking
  var box;

  $('.mobile-box').on('click', function() {
    $('.mobile-modal').slideDown();
    $('body').css('overflow', 'hidden');
    box = $(this).attr('data-box');
  })

  $('.mobile-modal .found').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.mobile-modal').slideUp();
    $('[data-box='+box+'] .star').show();
  })

  $('.mobile-modal .notFound').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.mobile-modal').slideUp();
  })


})
