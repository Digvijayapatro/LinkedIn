document.querySelector(".kapsayici").onclick=function(){
  if(document.getElementById("check").checked){
    document.querySelector(".symbol").style.transform="rotate(-90deg)";
  }
  else{
    document.querySelector(".symbol").style.transform="rotate(90deg)";
  }
}