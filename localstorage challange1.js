// selecting the 3 boxes

let fontTypeBox = document.querySelector("#fontSelect");
let fontColorBox = document.querySelector("#colorSelect");
let fontSizeBox = document.querySelector("#fontSizeSelect");

// changing the type and store it
fontTypeBox.addEventListener("click",function(){
  if(fontTypeBox.value ==="times"){
    document.body.style.fontFamily="Times New Roman";
    localStorage.removeItem("font-family");
    localStorage.setItem("font-family","times");
  }
  if(fontTypeBox.value ==="cairo"){
    document.body.style.fontFamily="Cairo";
    localStorage.removeItem("font-family");
    localStorage.setItem("font-family","cairo");
  }
  if(fontTypeBox.value ==="roboto"){
    document.body.style.fontFamily="Roboto";
    localStorage.removeItem("font-family");
    localStorage.setItem("font-family","roboto");
  }
});

fontColorBox.addEventListener("click",function(){
  document.body.style.color = fontColorBox.value;
  localStorage.removeItem("font-color");
  localStorage.setItem("font-color",fontColorBox.value);
})

fontSizeBox.addEventListener("click",function(){
  document.body.style.fontSize = `${fontSizeBox.value}px`;
  localStorage.removeItem("font-size");
  localStorage.setItem("font-size",`${fontSizeBox.value}`);
})

window.onload = function(){
  if(localStorage.getItem("font-size")){
    let optNum = localStorage.getItem("font-size")-16;
    fontSizeBox.options[optNum].selected="selected";
  }else{
    localStorage.setItem("font-size","16");
    fontSizeBox.options[0].selected = "selected";
  }
  document.body.style.fontSize = `${localStorage.getItem("font-size")}px`;


  if(localStorage.getItem("font-color")){
    let optNum = getIndex(fontColorBox.options,localStorage.getItem("font-color"));
    fontColorBox.options[optNum].selected="selected";
  }else{
    fontColorBox.options[0].selected="selected";
    localStorage.setItem("font-color",fontColorBox.value)
  }
  document.body.style.color = localStorage.getItem("font-color");



  switch (localStorage.getItem("font-family")){
    case (null):
      fontTypeBox.options[0].selected = "selected";
      localStorage.setItem("font-family","times");
      document.body.style.fontFamily = "Times New Roman"
      break;
    case ("times"):
      fontTypeBox.options[0].selected = "selected";
      localStorage.setItem("font-family","times");
      document.body.style.fontFamily = "Times New Roman"
      break;

    case("cairo"):
    fontTypeBox.options[1].selected = "selected";
    document.body.style.fontFamily = "Cairo";
    break;
    case("roboto"):
    fontTypeBox.options[2].selected = "selected";
    document.body.style.fontFamily = "Roboto";
    break;
  }

}

function getIndex(arr,val){
  for(let i=0;i<arr.length;i++){
    if(arr[i].value === val){
      return i;
    }
  }
}



