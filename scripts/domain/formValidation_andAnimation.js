var nextArrow = document.getElementById('nextArrow');
var currentPosition =0;

var nameInput = document.getElementById('nameInput');
var textArea = document.getElementById('texteara');
var emailInput = document.getElementById('emailInput');
var thankMsg = document.getElementById('thanks');

var form = document.querySelector('form');
if(form != null) {
    nextArrow.addEventListener('click',function(e){
        e.preventDefault();
        currentPosition +=1;
        if(currentPosition ===1){
            textArea.classList.add('fadeOut');
            setTimeout(()=>{
                nameInput.style.display = "block";
                textArea.style.display = "none";
                nameInput.classList.add('fadeIn');
            },399);
        }
        if (currentPosition ===2) {
            nameInput.classList.add('fadeOut');
            setTimeout(()=>{
                emailInput.style.display = "block";
                nameInput.style.display = "none";
                emailInput.classList.add('fadeIn');
            },399);
        }
        if(currentPosition === 3) {
            emailInput.classList.add('fadeOut');
            setTimeout(()=>{
                thankMsg.style.display = "block";
                emailInput.style.display = "none";
                thankMsg.classList.add('fadeIn');
                nextArrow.classList.add('fadeOut');
                nextArrow.style.opacity = "0";
            },390);
        }
    });
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
    })
}
