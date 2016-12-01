$(document).ready(function() {

  var currentURL = window.location.origin;
  var foundBoxes = [];
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
    } else {
      // else set as new card in database
      $.post('/activate/'+cardName).then(function(response) {
        console.log(response);
      })
    }
  })

  // --------- AJAX for geolocation ---------------

  var postURL = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAbRDkbs3zySDMsJhtGcVMGHEcX5bP3bsY';
  var userLocation;

  $.post(postURL).then(function(response) {
    console.log(response);
    userLocation = response.location.lat + ' ' + response.location.lng;
  })


  // ------box marking-------------------------
  var box;
  var boxLocation;

  // mobile star
  $('.mobile-box').on('click', function() {
    box = $(this).attr('data-box');
    boxLocation =$(this).attr('data-location');
    if(boxLocation == 0) {
      $('#modalMnoLocation').slideDown();
    } else if(boxLocation != userLocation) {
      $('#modalMLocation h4').html("Hmm, it doesn't look like you're there yet!");
      $('.locationFound').show();
      $('#modalMLocation').slideDown();
      setTimeout(function() {
        $('#modalMLocation').slideUp();
        $('.locationFound').hide();
        $('body').css('overflow', 'auto');
      }, 5000);
    } else {
      $('#modalMLocation h4').html("Nice job! You found it.");
      $('#modalMLocation').slideDown();
      setTimeout(function() {
        $('#modalMLocation').slideUp();
        $('body').css('overflow', 'auto');
        $('[data-box='+box+'] .star').show();
        cardToArray(box);
        foundCardtoDB();
        completeCardCheck();
      }, 3000);
    }
    $('body').css('overflow', 'hidden');
  });


  $('.locationFound, #modalMnoLocation .found').on('click', function() {
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
    box = $(this).attr('data-box');
    boxLocation =$(this).attr('data-location');
    $('.tablet-modal').slideDown();
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
