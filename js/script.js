/*window.onload = function reveal() {
    var reveal = document.querySelector(".reveal");
    reveal.classList.add("active");
}*/
//reveals[i].classList.remove("active");
function reveal(name){
    var reveal = document.querySelector(name);
    reveal.classList.add("active");
}

function hide(name){
    var reveal = document.querySelector(name);
    reveal.classList.remove("active");
}

window.addEventListener("load", function() {
    reveal(".registration-field");
});