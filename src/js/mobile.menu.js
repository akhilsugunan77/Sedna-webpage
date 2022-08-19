const mobileMenu=document.getElementById("mobile-menu-js");
const hamburgerBtn=document.getElementById("hamburger-btn-js");

hamburgerBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
})
