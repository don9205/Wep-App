$(document).ready(function(){

    $('.ham-menu').click(function(){
        $('.sidebar-hidden').animate({right:'0'},1000);

    });
    $('.sidebar-close').click(function(){
        $('.sidebar-hidden').animate({right:'-200px'},1000);
    });

});