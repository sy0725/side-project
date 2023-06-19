let buttons = document.querySelectorAll(".button");

buttons.forEach(e=> e.addEventListener("click",()=>{
  buttons.forEach(e => e.classList.remove("active"))
  e.classList.add("active")
}));