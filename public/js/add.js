$(document).ready(function() {

  // initialize materialize select
  $('select').material_select();

  // -------- box input forms -------------------
  // form number corresponds to input form wrapper id to control sliding up and down
  var formNumber;
  var errors = true;

  // box input form show
  $('.box-input').on('click', function() {
    // sets form number from data-box
    formNumber = $(this).attr('data-box');
    // hides any open input forms
    $('.box-input-form').slideUp();
    // hides any input arrows from open input forms
    $('.edit-arrow').hide();
    // changes color of open forms to blue
    $('.edit').removeClass('edit').addClass('ready');
    // shows input form for clicked box
    $('#'+formNumber).slideDown();
    // changes color to red
    $(this).removeClass('ready');
    $(this).addClass('edit');
    // shows editing arrow
    $(this).children('.edit-arrow').show();
  })

  // done button
  $('.done-button').on('click', function() {
    // gets input for specific box
    var val = $('#'+formNumber+' input').val();

    if(val != '') {
      // if a value is present hide form and arrow
      $('#'+formNumber).slideUp();
      $('[data-box='+formNumber+'] .edit-arrow').hide();
      // change icon from plus to check mark
      $('[data-box='+formNumber+'] .add-check').html('check');
      // changes class from edit to done
      $('[data-box='+formNumber+']').removeClass('edit');
      $('[data-box='+formNumber+']').addClass('done');

      // if all 8 elements have the class done no errors
      if($('.done').length == 8) {
        errors = false;
      }
      // checking for empty values in card name and category
      if($('#cardName').val() == '' || $('#select-cat').val()=='') {
        errors = true;
      }
      if(!errors) {
        // if no errors, enable form button
        $('#submit-card').attr('disabled', false);
      }
      console.log(errors);
    }
  })

  $('#cardName, #select-cat').on('blur', function() {
    // test same erros as above
    if($('.done').length == 8) {
      errors = false;
    }
    if($('#cardName').val() == '' || $('#select-cat').val()=='') {
      errors = true;
    }
    if(!errors) {
      $('#submit-card').attr('disabled', false);
    }
    console.log(errors);
  })

  // submit button
  $('#submit-card').on('click', function() {
    console.log($('.done'));
  })

})
