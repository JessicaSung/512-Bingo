$(document).ready(function() {

  // AJAX call to get badge level
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
