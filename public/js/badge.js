$(document).ready(function() {
  var currentURL = window.location.origin;

  if(window.location == currentURL+'/badge') {
    // AJAX call to get and increment badge level
    $.post('/badge').then(function(response) {
      console.log(response);
      var badgeLevel = response.badge_level;
      console.log(badgeLevel);
      var index = badgeLevel - 1;
      if(index > 4) {
        index = 4;
      }
      $('#badgeImg').attr('src', badges[index].img);
      $('#badgeName').html(badges[index].name);
      $('#badgeTag').html(badges[index].tag);
    })
  } else if(window.location == currentURL+'/my-badges') {
    console.log('here');
    // AJAX call to get badge level
    $.post('/my-badges').then(function(response) {
      var badgeLevel = response.badge_level;
      if(badgeLevel > 5) {
        badgeLevel = 5;
      }
      for(var i = 0; i < badgeLevel; i++) {
        var badgeDiv = $('<div class="badge" data-badge="'+i+'"></div>');
        badgeDiv.append('<img src="'+badges[i].img+'" alt="Scout Badge">');
        badgeDiv.append('<h4>'+badges[i].name+'</h4>');
        badgeDiv.append('<h5>'+badges[i].tag+'</h5>');
        $('.mobile-badges, .tablet-badges').append(badgeDiv);
      }
    })
  }


  var badges = [
    {
      name: 'Food Scout',
      tag: 'yum...',
      img: '/style/images/food-scout.png'
    },
    {
      name: 'City Scout',
      tag: "two steppin' all day",
      img: '/style/images/city-scout.png'
    },
    {
      name: 'Active Scout',
      tag: 'been there, done that',
      img: '/style/images/active-scout.png'
    },
    {
      name: 'Armadillo Scout',
      tag: 'true native',
      img: '/style/images/armadillo-scout.png'
    },
    {
      name: 'Weird Scout',
      tag: "you've seen it all",
      img: '/style/images/weird-scout.png'
    }
  ]

})
