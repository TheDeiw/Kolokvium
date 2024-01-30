/*window.onload = function reveal() {
    var reveal = document.querySelector(".reveal");
    reveal.classList.add("active");
}*/
//reveals[i].classList.remove("active");
function reveal(name){
    var reveal = document.querySelector(name);
    reveal.classList.remove("hidden");
    setTimeout(function () {
        reveal.style.display = "block";
        reveal.classList.add("active");
    }, 1000);
}

function hide(name){
    var reveal = document.querySelector(name);
    reveal.classList.remove("active");
    setTimeout(function () {
        reveal.style.display = "none";
        reveal.classList.add("hidden");
    }, 1000);
}

window.addEventListener("load", function() {
    reveal(".registration-field");
});