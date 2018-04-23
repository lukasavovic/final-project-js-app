
if ( document.querySelector('.galleryBoxes') !== null) {
    var URL = 'http://api.myjson.com/bins/1dwakz ';

    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.responseType = 'json';
    request.onload = function(){
        for (var i=0; i<request.response.length;i++){
            var gallery = document.querySelector('.galleryBoxes');
            var galleryLink = document.createElement("a");
            galleryLink.className = 'col-lg-4 col-md-6 col-sm-12 galleryImg';
            galleryLink.href = "img/tattoo/"+request.response[i];
            var imgTumbnail = document.createElement('img');
            imgTumbnail.src = "img/tattoo/tumbnail/"+request.response[i];
            galleryLink.appendChild(imgTumbnail);
            gallery.appendChild(galleryLink);
        }
    }
request.send();
}

