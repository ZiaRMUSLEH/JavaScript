
let mode = "light"

const bodyEl =  document.querySelector("body")
const buttonEl = document.querySelector("button")


function setMode(){
    if(mode=="light"){
        buttonEl.classList.remove("light");
        buttonEl.classList.add("dark");
        bodyEl.classList.remove("light");
        bodyEl.classList.add("dark");
        mode = "dark";
    }else{
        buttonEl.classList.remove("dark");
        buttonEl.classList.add("light");
        bodyEl.classList.remove("dark");
        bodyEl.classList.add("light");
        mode = "light";
    }
} 