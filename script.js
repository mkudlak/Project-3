
$(function() {

  setupAnimations();
  runAnimations();

});

function setupAnimations() {
  $('.about-us').addClass('animated opacity0');
  $('.services').addClass('animated opacity0');
  $('.what-we-do').addClass('animated opacity0');
  $('.item-1').addClass('animated opacity0');
  $('.item-2').addClass('animated opacity0');
  $('.item-3').addClass('animated opacity0');
  $('.item-4').addClass('animated opacity0');
  $('.item-5').addClass('animated opacity0');
  $('.item-6').addClass('animated opacity0');
  $('.contact').addClass('animated opacity0');
}

function runAnimations() {
  $('.about-us').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 slideInLeft',
      classToRemove: 'opacity0',
    });
  });
  $('.services').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 slideInRight',
      classToRemove: 'opacity0',
    });
  });
  $('.what-we-do').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 slideInUp',
      classToRemove: 'opacity0',
    });
  });
  $('.item-1').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 zoomIn',
      classToRemove: 'opacity0',
    });
  });
  $('.item-2').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 zoomIn',
      classToRemove: 'opacity0',
    });
  });
  $('.item-3').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 zoomIn',
      classToRemove: 'opacity0',
    });
  });
  $('.item-4').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 zoomIn',
      classToRemove: 'opacity0',
    });
  });
  $('.item-5').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 zoomIn',
      classToRemove: 'opacity0',
    });
  });
  $('.item-6').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 zoomIn',
      classToRemove: 'opacity0',
    });
  });
  $('.contact').addClass(function() {
    $(this).viewportChecker({
      classToAdd: 'opacity1 slideInUp',
      classToRemove: 'opacity0',
    });
  });
}