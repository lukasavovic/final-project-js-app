var nextArrow = document.getElementById('nextArrow');
var currentPosition =1;

var nameInput = document.getElementById('nameInput');
var textArea = document.getElementById('texteara');
var messageD = document.getElementById('messageD');
var emailInput = document.getElementById('emailInput');
var thankMsg = document.getElementById('thanks');

var form = document.querySelector('form');
if(form != null) {
    nextArrow.addEventListener('click',function(e){
        e.preventDefault();    
        if(currentPosition ===1 && textAreaValidation()){
            textArea.classList.add('fadeOut');
            setTimeout(()=>{
                messageD.innerHTML = "";
                nameInput.style.display = "block";
                textArea.style.display = "none";
                nameInput.classList.add('fadeIn');
                currentPosition = 2;
            },399);
        }
        if (currentPosition ===2 && nameValidation()) {
            nameInput.classList.add('fadeOut');
            setTimeout(()=>{
                messageD.innerHTML = "";
                emailInput.style.display = "block";
                nameInput.style.display = "none";
                emailInput.classList.add('fadeIn');
                currentPosition = 3;
            },399);
        }
        if(currentPosition === 3 && emailValidatio()) {
            emailInput.classList.add('fadeOut');
            setTimeout(()=>{
                messageD.innerHTML = "";
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

function emailValidatio () {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emailInputValue = document.getElementById("emailInputValue").value;
    if(re.test(String(emailInputValue).toLowerCase())){
        return true;
    } 
    else {
        messageD.innerHTML = "that is not a real email..."
    }
}

function nameValidation () {
    var nameInputValue = document.getElementById("nameInputValue").value;
    if (nameInputValue !== "") {
        return true;
    }
    else {
        messageD.innerHTML = "hey, dont leave before telling us your name";
    }
}

function textAreaValidation () {
    var textAreaValue = document.getElementById('textAreaValue').value;
    if (textAreaValue !== "") {
        return true;
    }
    else {
        messageD.innerHTML = "please say something first"
    }
}