var navButton = document.querySelector('nav');
var menu = document.getElementById('menu');
var svg = document.getElementById('Layer_1');
var open = false;
var rec_bottom = document.getElementById('XMLID_4_');
var rec_top =  document.getElementById('XMLID_1_');
navButton.addEventListener('click',function(){
    if(open) {
        svg.style.fill = "black";
        // menu.classList.toggle('fadeIn');
        menu.classList.toggle("hidden");
        // menu.classList.remove('fadeOut');
        open = false;
        rec_bottom.style.transform = "translateY(0%)";
        rec_top.style.transform = "translateY(0%)";
    }
    else {
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
for (var i=0;i<navLinks.length;i++) {
    navLinks[i].addEventListener("click",function(){
        svg.style.fill = "black";
        menu.classList.toggle("hidden");
        open = false;
        rec_bottom.style.transform = "translateY(0%)";
        rec_top.style.transform = "translateY(0%)";
    });
}