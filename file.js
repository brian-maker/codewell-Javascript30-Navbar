let d = new Date('December 17, 1995  22:11:51');
let pm = d.getHours() >= 12;
let hour12 = d.getHours() % 12;
if (!hour12) 
  hour12 += 12;
let minute = d.getMinutes();

document.getElementById("time").innerHTML = (`${hour12}:${minute} ${pm ? 'pm' : 'am'}`);

const menu = document.querySelector("#menu");
const menuContainer = document.querySelector(".menu-container")
const close = document.querySelector("#Close")


menu.addEventListener("click", ()=>{
    menuContainer.classList.toggle("hidden")

});
close.addEventListener("click", ()=>{
    menuContainer.classList.toggle("hidden")
})

const link = document.querySelector("#link");
const menuItems = document.querySelector(".list-wrapper");

link.addEventListener("mouseOver", ()=>{
    menuItems.style.display ="block"
})