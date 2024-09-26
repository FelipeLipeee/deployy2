// JavaScript for smooth scrolling and navbar behavior

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    // Add 'scrolled' class to navbar when the page is scrolled
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Smooth scrolling for anchor links
    var links = document.querySelectorAll("a[href^='#']");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth",
            });
        });
    }
});
