let elBtnOpen = document.querySelector(".burger")
let elMenu = document.querySelector(".site-menu")
let elBody = document.querySelector("body")

elBtnOpen.addEventListener("click", function(){
    elMenu.classList.toggle("site-menu__show")
    elBtnOpen.classList.toggle("burger-close")
    elBody.classList.toggle("body-scroll")
})