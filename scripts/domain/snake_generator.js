var snake = document.querySelectorAll('.snake');
console.log(snake);

setTimeout(() => {
    for (var i=0; i<snake.length;i++){
        snake[i].style.top = Math.random()*250 + "%";
        snake[i].style.left = Math.random()*90 + "%";
        snake[i].style.transform = "rotate(" + Math.random()*360 + "deg)";
    }
}, 1000);
