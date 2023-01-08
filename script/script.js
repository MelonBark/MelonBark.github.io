const header = document.querySelector('header');
let prevScrollpos = window.pageYOffset;
var today = new Date();
var year = today.getFullYear();

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.height = '80px';
    } else {
        header.style.height = '60px';
    }
    prevScrollpos = currentScrollPos;
}

window.onload = function () {
    document.getElementById("displayYear").innerHTML = year;
};