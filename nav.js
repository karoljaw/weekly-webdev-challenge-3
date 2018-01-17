const toggleul = document.getElementById("toggle-nav");
const toggleicon = document.querySelector(".nav-burger");
let as = document.querySelectorAll("a");
as = Array.from(as);


toggleicon.addEventListener("click", toggleMenu);

as.forEach(function(e) {
    e.addEventListener("click", closeMenu); 
});


function toggleMenu(e) {
        toggleul.classList.toggle("nav-opened");
}

function closeMenu(e) {
    if (e.target.parentElement.parentElement.classList.contains("nav-opened")) {
        toggleul.classList.toggle("nav-opened");
    }
}





  

