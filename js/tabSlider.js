$(document).ready(function() {
        

    //Variables globales
    
    tabIndex = 0;
    tabs = [];

    $('section.tab').each (function(i){
        a = $(this).data('tab');
        tabs.push(a);
    });


    $('.navArrow').click(function(){
        //Revisar la direccion del boton que oprimio
        direction = $(this).data('direction');
        console.log('boton apretado a la' + direction);
        console.log(tabs.length);
        console.log(a);
        $('.tab').addClass('visible');

        
        //Pasamos la direccion a la funcion de mover elementos
        mover(direction);
    });


    function mover(x){
        //Efectuamos movimiento izquierda o derecha dependiendo de la direccion.
        if (x == 'prev') {

            tabIndex--;
            
            if (tabIndex == -1) {
                tabIndex = tabs.length-1;

            };
            
            i = tabs[tabIndex];
            showTab(i,x);
        }

        if (x == 'next') {
            
            tabIndex++;
            
            if (tabIndex == tabs.length) {
                tabIndex=0;
            }
            
            i = tabs[tabIndex];
            showTab(i,x);
        };
    };

    function showTab(i,x){
       
        switch (i){
             case 'first':
                tabIndex = 0;
             break; 
             case 'second':
                tabIndex = 1;
             break; 
             case 'third':
                tabIndex = 2;
             break; 
             case 'fourth':
                tabIndex = 3;
             break;
             case 'fifth':
                tabIndex = 4;
             break;
             case 'sixth':
                tabIndex = 5;
             break;
             case 'seventh':
                tabIndex = 6;
             break;
             default: tabIndex = tabs.length;
        }
         
        switch (x){
             case 'prev':
                animacion = 'slideRight';
             break; 
             case 'next':
                animacion = 'slideLeft';
             break; 
             default: animacion = 'slideDown';
        }


        $('section.tab').removeClass('visible');
        $('section.tab').removeClass('slideLeft');
        $('section.tab').removeClass('slideRight');
        $('section.tab').removeClass('slideDown');
        $('.' + i).addClass('visible');
        $('.' + i).addClass(animacion);
    };

});