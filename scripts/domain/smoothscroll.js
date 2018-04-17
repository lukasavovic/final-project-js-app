$('document').ready(function(){
    
    $('#work').click(function(e){
        $('#menu').toggleClass( "hidden");
        $('html, body').animate({
             
        }, 1000);
        e.preventDefault();
    });
});