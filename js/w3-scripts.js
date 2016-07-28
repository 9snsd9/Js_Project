var slideIndex = 1;




function showDivs(n) {
    "use strict";
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1; }
    if (n < 1) {slideIndex = x.length; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-red";
}

function plusDivs(n) {
    "use strict";
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    "use strict";
    showDivs(slideIndex = n);
}

showDivs(slideIndex);