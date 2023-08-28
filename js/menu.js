const menu = document.querySelector(".nav_menu-logo");
const close = document.querySelector(".nav_close-logo");
const items = document.querySelector(".nav_items");

menu.addEventListener("click",()=>{
    items.classList.add("show");
})

close.addEventListener("click",()=>{
    items.classList.remove("show");
})