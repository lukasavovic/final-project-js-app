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

console.log('I have entered this file.');
console.log('This is crystal clear evidence that this works.');

var calculation = 200 + 223;

console.log('Sanity Check: 200 + 223 = ' + calculation);
console.log('bye.');
'use strict';

var navButton = document.querySelector('nav');
var menu = document.getElementById('menu');
var closeX = document.getElementById('xClose');

navButton.addEventListener('click', function () {
    menu.classList.toggle('fadeIn');
    menu.classList.toggle("hidden");
    menu.classList.remove('fadeOut');
});

closeX.addEventListener('click', function () {
    menu.classList.toggle('fadeOut');
    menu.classList.remove('fadeIn');
    setTimeout(function () {
        menu.classList.toggle('hidden');
    }, 500);
});