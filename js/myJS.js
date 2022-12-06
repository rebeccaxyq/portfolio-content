function checkForm(){
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  if (email.value === "") {
    document.getElementById("emailerrormsg").style.display = "block";
  } else {
    document.getElementById("emailerrormsg").style.display = "none";
  }

  if (message.value === "") {

    document.getElementById("messageerrormsg").style.display = "block";
  } else {
    document.getElementById("messageerrormsg").style.display = "none";
  }
 
  return false;
}

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent= "";
console.log(splitText);

for(let i=0; i < splitText.length; i++){
  text.innerHTML += "<span>"+splitText[i] + "<span>";
}

var char = 0;
var timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length) {
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}
