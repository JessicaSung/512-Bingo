$(document).ready(function() {

  var currentURL = window.location.origin;
  var foundBoxes;
  var cardName = $('.board-title').html();


  // inital AJAX call to database to get marked boxes
  $.post('/play/'+cardName).then(function(response) {
    // if user has found items, show stars
    if(response) {
      foundBoxes = response.items_found.split(',');
      console.log(foundBoxes);

      foundBoxes.forEach(function(box) {
        $('[data-box='+box+'] .star').show();
      })
    }
  })


  // ------box marking-------------------------
  var box;

  // mobile star
  $('.mobile-box').on('click', function() {
    $('.mobile-modal').slideDown();
    $('body').css('overflow', 'hidden');
    box = $(this).attr('data-box');
  });

  $('.mobile-modal .found').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.mobile-modal').slideUp();
    $('[data-box='+box+'] .star').show();
    cardToArray(box);
    foundCardtoDB();
    completeCardCheck();
  });

  $('.mobile-modal .notFound').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.mobile-modal').slideUp();
  });

  // tablet+ star
  $('.tablet-box').on('click', function() {
    $('.tablet-modal').slideDown();
    box = $(this).attr('data-box');
  });

  $('.tablet-modal .found').on('click', function() {
    $('.tablet-modal').slideUp();
    $('[data-box='+box+'] .tablet-star').show();
    cardToArray(box);
    foundCardtoDB();
    completeCardCheck();
  });

  $('.tablet-modal .notFound').on('click', function() {
    $('.tablet-modal').slideUp();
  });

  // add new found card to array
  function cardToArray(box) {
    foundBoxes.push(box);
    console.log(foundBoxes);
  }

  // post new found item to database
  function foundCardtoDB() {
    console.log('sending');
    var data = {
      foundBoxes: foundBoxes
    }
    $.post('/found', data).then(function(response) {
      console.log(response);
    })
  }

  // check if all items have been found
  function completeCardCheck() {
    if(foundBoxes.length == 8) {
      window.location = currentURL +'/badge';
    }
  }

});
