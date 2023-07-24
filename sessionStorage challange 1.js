firstName = document.querySelector("#firstName");
lastName = document.querySelector("#lastName");
tel = document.querySelector("#tel");
sex = document.querySelector("#sex");
myFile = document.querySelector("#myFile");

window.oninput=function(){
  sessionStorage.setItem("first",firstName.value);
  sessionStorage.setItem("last",lastName.value);
  sessionStorage.setItem("tel",tel.value);
  sessionStorage.setItem("sex",sex.value);
  sessionStorage.setItem("file",myFile.value);
}

window.onload = function(){
  if(sessionStorage.getItem("first")){
    firstName.value = sessionStorage.getItem("first");
  }
  if(sessionStorage.getItem("last")){
    lastName.value = sessionStorage.getItem("last");
  }
  if(sessionStorage.getItem("tel")){
    tel.value = sessionStorage.getItem("tel");
  }
  if(sessionStorage.getItem("sex")){
    sex.value = sessionStorage.getItem("sex");
  }
  if(sessionStorage.getItem("file")){
    myFile.value = sessionStorage.getItem("file");
  }
}

window.onclose = function(){
  sessionStorage.clear()
}

