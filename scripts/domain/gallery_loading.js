
var URL = 'https://api.myjson.com/bins/hd8ej ';

    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.responseType = 'json';
    request.onload = function(){
        for (var i=0; i<request.response.length;i++){
            var gallery = document.querySelector('.galleryBoxes');
            var galleryImg = document.createElement("DIV");
            galleryImg.className = 'col-lg-4 col-md-6 col-sm-12 galleryImg';
            galleryImg.style.backgroundImage = "url(../img/tattoo/"+request.response[i];
            gallery.appendChild(galleryImg);
        }
    }
request.send();
