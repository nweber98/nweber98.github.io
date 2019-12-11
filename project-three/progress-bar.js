/*!
 * Progress Scroller
 * @author Erik Runyon
 * Updated 2016-12-20
 * Based on https://css-tricks.com/reading-position-indicator/
 */
jQuery(function($){
  var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max,
      value;

  progressBar.attr('max', docHeight - winHeight);

  $(document).on('scroll', function(){
    topval = $(window).scrollTop();
    progressBar.attr('value', topval);
  });
});