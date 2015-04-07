$(function(){
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 0
  });
});

(function(){
  // code goes here...
	var ua = navigator.userAgent,
    isMobileWebkit = true;

  if (isMobileWebkit) {
    $('html').addClass('mobile');
  }


  $(function(){
    var iScrollInstance;

    if (isMobileWebkit) {
      iScrollInstance = new iScroll('wrapper');

      $('#scroller').stellar({
        scrollProperty: 'transform',
        positionProperty: 'transform',
        horizontalScrolling: false,
        verticalOffset: 0
      });
    } else {
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
      });
    }
  });
})();