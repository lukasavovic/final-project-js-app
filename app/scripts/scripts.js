'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}
"use strict";

var galleryImg = document.querySelectorAll('.galleryBoxes div');
console.log(galleryImg);

for (var i = 0; i < galleryImg.length; i++) {
    galleryImg[i].style.backgroundImage = "url(../img/tattoo/img" + i + ".jpg";
}
'use strict';

var navButton = document.querySelector('nav');
var menu = document.getElementById('menu');
var closeX = document.getElementById('xClose');

navButton.addEventListener('click', function () {
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
'use strict';

$('document').ready(function () {

    $('#work').click(function (e) {
        $('#menu').toggleClass("hidden");
        $('html, body').animate({}, 1000);
        e.preventDefault();
    });
});