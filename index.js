const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

const circleEl = document.querySelector(".circle");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody()

function updateBody(){
  if(inputEl.checked){
    bodyEl.style.background = "black";
    circleEl.style.background = "black";
  }else{
    bodyEl.style.background = "white"
    circleEl.style.background = "white"
  }
}

inputEl.addEventListener("input",()=>{
  updateBody();
  updateLocalStorage();
})

function updateLocalStorage(){
  localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}