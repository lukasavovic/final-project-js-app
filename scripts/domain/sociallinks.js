$('document').ready(function(){
    
    $(this).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > $('#hero').offset().top){
            $('#facebook').addClass('fadeIn'); 
            $('#instagram').addClass('fadeIn');  
            setTimeout(()=>{
                $('#facebook').removeClass('opacityZero');  
                $('#instagram').removeClass('opacityZero');  
            }, 15);
        }
    });
});
