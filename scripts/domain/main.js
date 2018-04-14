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

var url = 'https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=792680&units=metric';

var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.onload = function() {
  
  document.querySelector('a').innerHTML = "Today in " + request.response.name +":" ;
  
  console.log(request.response)
  console.log(request.response.main.temp)
  
};

request.send();