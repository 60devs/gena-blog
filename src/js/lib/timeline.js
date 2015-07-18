import $ from 'jquery';

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

$(function() {
  var update = function(k) {
    $('.vclTimelineBlock').each(function() {
      if ($(this).offset().top <= $(window).scrollTop() +
          $(window).height() * k && $(this).find('.vclTimelineImage').hasClass('vclVisibilityHidden')) {
        $(this).find('.vclTimelineImage, .vclTimelineContent')
          .removeClass('vclVisibilityHidden').addClass('bounce-in');
      }
    });
  };
  update(1);
  $(window).on('scroll', debounce(()=> update(0.83), 70));
  $(window).on('resize', debounce(()=> update(1), 70));
});
