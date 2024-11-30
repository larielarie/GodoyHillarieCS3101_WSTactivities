document.addEventListener("DOMContentLoaded", function () {
    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");

    togglebtn.addEventListener("click", function () {
        this.classList.toggle("click");
        nav.classList.toggle("open");
    });

  
    new Typed(".input", {
        strings: ["Frontend Developer", "UX Designer", "Web Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true
    });

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
    
});
