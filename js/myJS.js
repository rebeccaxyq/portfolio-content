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
