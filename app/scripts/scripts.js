'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}
'use strict';

var URL = 'https://api.myjson.com/bins/hd8ej ';

var request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.onload = function () {
    for (var i = 0; i < request.response.length; i++) {
        var gallery = document.querySelector('.galleryBoxes');
        var galleryImg = document.createElement("DIV");
        galleryImg.className = 'col-lg-4 col-md-6 col-sm-12 galleryImg';
        galleryImg.style.backgroundImage = "url(../img/tattoo/" + request.response[i];
        gallery.appendChild(galleryImg);
    }
};
request.send();
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