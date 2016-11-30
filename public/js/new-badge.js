$(document).ready(function() {

  // AJAX call to get badge level
  $.post('/badge').then(function(response) {
    console.log(response);
  })



})
