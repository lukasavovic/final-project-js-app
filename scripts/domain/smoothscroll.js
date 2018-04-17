$('document').ready(function(){
    
    $('#work').click(function(e){
        $('#menu').toggleClass( "hidden");
        $('html, body').animate({
            scrollTop: 
        }, 1000);
        e.preventDefault();
    });
});