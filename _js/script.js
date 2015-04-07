//Objeto de scroll principal para la aplicacion.
var myScroll;

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
    

    if (isMobileWebkit) {
      //myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true });

      myScroll = new IScroll('#wrapper', { 
        mouseWheel: true, 
        click: true,
        scrollX: true,
        scrollY: true,
        momentum: true,
        bounce: true
       });

      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      

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



//Funcion que regresa el scroll a la posicion indicada  scrollTo(x, y, time, easing) The available options are: quadratic, circular, back, bounce, elastic.

    function backtotop (){
      
      myScroll.scrollTo(0, 0, 1000, IScroll.utils.ease.quadratic); 
      
    }




