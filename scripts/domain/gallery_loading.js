var galleryImg = document.querySelectorAll('.galleryBoxes div');
console.log(galleryImg);

for(var i=0; i<galleryImg.length; i++) {
    galleryImg[i].style.backgroundImage = "url(../img/tattoo/img" + i + ".jpg";
}