'use strict';

if (document.getElementById('links') !== null) {
    document.getElementById('links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = { index: link, event: event },
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
}
'use strict';

var nextArrow = document.getElementById('nextArrow');
var currentPosition = 1;

var nameInput = document.getElementById('nameInput');
var textArea = document.getElementById('texteara');
var messageD = document.getElementById('messageD');
var emailInput = document.getElementById('emailInput');
var thankMsg = document.getElementById('thanks');

var form = document.querySelector('form');
if (form != null) {
    nextArrow.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPosition === 1 && textAreaValidation()) {
            textArea.classList.add('fadeOut');
            setTimeout(function () {
                messageD.innerHTML = "";
                nameInput.style.display = "block";
                textArea.style.display = "none";
                nameInput.classList.add('fadeIn');
                currentPosition = 2;
            }, 399);
        }
        if (currentPosition === 2 && nameValidation()) {
            nameInput.classList.add('fadeOut');
            setTimeout(function () {
                messageD.innerHTML = "";
                emailInput.style.display = "block";
                nameInput.style.display = "none";
                emailInput.classList.add('fadeIn');
                currentPosition = 3;
            }, 399);
        }
        if (currentPosition === 3 && emailValidatio()) {
            emailInput.classList.add('fadeOut');
            setTimeout(function () {
                messageD.innerHTML = "";
                thankMsg.style.display = "block";
                emailInput.style.display = "none";
                thankMsg.classList.add('fadeIn');
                nextArrow.classList.add('fadeOut');
                nextArrow.style.opacity = "0";
            }, 390);
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
}

function emailValidatio() {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emailInputValue = document.getElementById("emailInputValue").value;
    if (re.test(String(emailInputValue).toLowerCase())) {
        return true;
    } else {
        messageD.innerHTML = "that is not a VALID email...";
    }
}

function nameValidation() {
    var nameInputValue = document.getElementById("nameInputValue").value;
    if (nameInputValue !== "" && nameInputValue.length > 2) {
        var re = /^[a-z ,.'-]+$/i;
        if (re.test(String(nameInputValue).toLowerCase())) {
            return true;
        }
    } else {
        messageD.innerHTML = "hey, dont leave before telling us your REAL name";
    }
}

function textAreaValidation() {
    var textAreaValue = document.getElementById('textAreaValue').value;
    if (textAreaValue !== "") {
        return true;
    } else {
        messageD.innerHTML = "please say something...";
    }
}
'use strict';

if (document.querySelector('.galleryBoxes') !== null) {
    var URL = 'http://api.myjson.com/bins/1dwakz ';

    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.responseType = 'json';
    request.onload = function () {
        for (var i = 0; i < request.response.length; i++) {
            var gallery = document.querySelector('.galleryBoxes');
            var galleryLink = document.createElement("a");
            galleryLink.className = 'col-lg-6 col-md-6 col-sm-12 galleryImg';
            galleryLink.href = "img/tattoo/" + request.response[i];
            var imgTumbnail = document.createElement('img');
            imgTumbnail.src = "img/tattoo/tumbnail/" + request.response[i];
            galleryLink.appendChild(imgTumbnail);
            gallery.appendChild(galleryLink);
        }
    };
    request.send();
}
"use strict";
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
        // menu.classList.toggle('fadeIn');
        menu.classList.toggle("hidden");
        // menu.classList.remove('fadeOut');
        open = false;
        rec_bottom.style.transform = "translateY(0%)";
        rec_top.style.transform = "translateY(0%)";
    } else {
        svg.style.fill = "white";
        menu.classList.toggle('fadeIn');
        menu.classList.toggle("hidden");
        // menu.classList.remove('fadeOut');
        open = true;
        rec_bottom.style.transform = "translateY(-49%)";
        rec_top.style.transform = "translateY(49%)";
    }
});

var navLinks = document.querySelectorAll("#menu a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        svg.style.fill = "black";
        menu.classList.toggle("hidden");
        open = false;
        rec_bottom.style.transform = "translateY(0%)";
        rec_top.style.transform = "translateY(0%)";
    });
}
'use strict';

if ($('#hero').length) {
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
}