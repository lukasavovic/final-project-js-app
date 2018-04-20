'use strict';

document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = { index: link, event: event },
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
'use strict';

var URL = 'http://api.myjson.com/bins/hd8ej ';

var request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.onload = function () {
    for (var i = 0; i < request.response.length; i++) {
        var gallery = document.querySelector('.galleryBoxes');
        var galleryLink = document.createElement("a");
        galleryLink.className = 'col-lg-4 col-md-6 col-sm-12 galleryImg';
        galleryLink.href = "img/tattoo/" + request.response[i];
        var imgTumbnail = document.createElement('img');
        imgTumbnail.src = "img/tattoo/tumbnail/tumb" + i + ".jpg";
        galleryLink.appendChild(imgTumbnail);
        gallery.appendChild(galleryLink);
    }
};
request.send();
'use strict';

var navButton = document.querySelector('nav');
var menu = document.getElementById('menu');
var svg = document.getElementById('Layer_1');
var open = false;
var rec_bottom = document.getElementById('XMLID_4_');
var rec_top = document.getElementById('XMLID_1_');
navButton.addEventListener('click', function () {
    if (open) {
        svg.style.fill = "black";
        menu.classList.toggle('fadeIn');
        menu.classList.toggle("hidden");
        menu.classList.remove('fadeOut');
        open = false;
        rec_bottom.style.transform = "translateY(0%)";
        rec_top.style.transform = "translateY(0%)";
    } else {
        svg.style.fill = "white";
        menu.classList.toggle('fadeIn');
        menu.classList.toggle("hidden");
        menu.classList.remove('fadeOut');
        open = true;
        rec_bottom.style.transform = "translateY(-49%)";
        rec_top.style.transform = "translateY(49%)";
    }
});
"use strict";
"use strict";

var snake = document.querySelectorAll('.snake');
console.log(snake);

setTimeout(function () {
    for (var i = 0; i < snake.length; i++) {
        snake[i].style.top = Math.random() * 45 + "%";
        snake[i].style.left = Math.random() * 50 + "%";
        snake[i].style.transform = "rotate(" + Math.random() * 360 + "deg)";
    }
}, 500);
'use strict';

$('document').ready(function () {

    $(this).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > $('#hero').offset().top) {
            $('#facebook').addClass('fadeIn');
            $('#instagram').addClass('fadeIn');
            setTimeout(function () {
                $('#facebook').removeClass('opacityZero');
                $('#instagram').removeClass('opacityZero');
            }, 15);
        }
    });
});