var toggleul = document.getElementById("toggle-nav");
var toggleicon = document.querySelector(".nav-burger");
let navbar = document.querySelector(".nav");
let body = document.querySelector("body");


let lis = document.getElementsByTagName("li");
lis = Array.from(lis);


toggleicon.addEventListener("click", function(){
    toggleul.classList.toggle("nav-opened");
});

lis.forEach(function(li){
    li.addEventListener("click", function(){
        toggleul.classList.toggle("nav-opened");
    })
})




  

