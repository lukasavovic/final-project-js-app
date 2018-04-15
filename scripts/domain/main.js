var navButton = document.querySelector('nav');
var menu = document.getElementById('menu');
var closeX = document.getElementById('xClose');


navButton.addEventListener('click',function(){
    menu.classList.toggle('fadeIn');
    menu.classList.toggle("hidden");
    menu.classList.remove('fadeOut');
});


closeX.addEventListener('click', function(){
    menu.classList.toggle('fadeOut');
    menu.classList.remove('fadeIn');
    setTimeout(() => {
        menu.classList.toggle('hidden')
    }, 500);
});

