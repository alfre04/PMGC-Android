// funcion para dar animación al dar click y cambie de cara
var initCubo = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

        onButtonClick = function( event ){
          box.removeClassName( panelClassName );
          panelClassName = event.target.className;
          box.addClassName( panelClassName );
          //indexAnimate = -1;
        };


        // funcion para que funcione en Chrome
        box.addEventListener( 'webkitTransitionEnd', 
          function( event ) { 
            animateCons (); 
          }, false );

        // funcion para que funcione en Mozilla
        box.addEventListener( 'transitionend', 
        function( event ) { 
          animateCons (); 
        }, false );

        // funcion para que funcione en Opera
        box.addEventListener( 'oTransitionEnd', 
            function( event ) { 
              animateCons (); 
            }, false );

        // funcion para que funcione en Explorer
        box.addEventListener( 'transitionend', 
            function( event ) {
              animateCons (); 
            }, false );


        for (var i=0, len = showPanelButtons.length; i < len; i++) {
          showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
        }


};
  
window.addEventListener( 'DOMContentLoaded', initCubo, false);