var navButton = document.querySelector('nav');
var menu = document.getElementById('menu');
var svg = document.getElementById('Layer_1');

navButton.addEventListener('click',function(){
    svg.style.fill = "white";
    menu.classList.toggle('fadeIn');
    menu.classList.toggle("hidden");
    menu.classList.remove('fadeOut');
});


// closeX.addEventListener('click', function(){
//     menu.classList.toggle('fadeOut');
//     menu.classList.remove('fadeIn');
//     setTimeout(() => {
//         menu.classList.toggle('hidden')
//     }, 500);
// });

