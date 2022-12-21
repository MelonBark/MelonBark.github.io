const header = document.querySelector('header');
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.height = '80px';
    } else {
        header.style.height = '60px';
    }
    prevScrollpos = currentScrollPos;
}
