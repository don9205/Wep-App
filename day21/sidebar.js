$(document).ready(function(){

    $('.button').click(function(){

        //$('.box').toggleClass('display-block');

        $('.box').animate({
            height:'toggle'
            
        },"slow");
    });

    $('.ham-menu').click(function(){
        $('.sidebar').animate({right:'0'},1000);

    });
    $('.sidebar-close').click(function(){
        $('.sidebar').animate({right:'-200px'},1000);
    });

    //var p = $('p');
    //p.animate({opacity:'1'},2000);
    
    
});