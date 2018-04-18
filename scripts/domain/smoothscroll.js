$('document').ready(function(){
    
    $(this).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > $('#hero').offset().top){
            $('#facebook').removeClass('hidden');
            $('#instagram').removeClass('hidden')
        } else {
            $('#facebook').addClass('hidden');
            $('#instagram').addClass('hidden')
        }
    });
});