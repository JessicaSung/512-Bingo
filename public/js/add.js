$(document).ready(function() {

  // initialize materialize select
  $('select').material_select();

  // -------- box input forms -------------------
  var formNumber;
  var errors = true;

  // box input form show
  $('.box-input').on('click', function() {
    formNumber = $(this).attr('data-box');
    $('.box-input-form').slideUp();
    $('.edit-arrow').hide();
    $('.edit').removeClass('edit').addClass('ready');
    $('#'+formNumber).slideDown();
    $(this).removeClass('ready');
    $(this).addClass('edit');
    $(this).children('.edit-arrow').show();
  })

  // done button
  $('.done-button').on('click', function() {
    var val = $('#'+formNumber+' input').val();
    if(val != '') {
      $('#'+formNumber).slideUp();
      $('[data-box='+formNumber+'] .edit-arrow').hide();
      $('[data-box='+formNumber+'] .add-check').html('check');
      $('[data-box='+formNumber+']').removeClass('edit');
      $('[data-box='+formNumber+']').addClass('done');
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
    }
  })

  $('#cardName, #select-cat').on('blur', function() {
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
