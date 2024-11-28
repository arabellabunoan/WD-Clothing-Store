document.querySelectorAll(".accordion").forEach(function(acc) {
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    if (panel) {
      panel.style.display = (panel.style.display === "block") ? "none" : "block";
    }
  });
});

let catToggle = document.querySelector('.cat-toggle');
let catbar = document.querySelector('.catbar');


catToggle.onclick = (event) => {
  event.preventDefault();
  catbar.classList.toggle('active');
};


window.onclick = (event) => {
  if (!catToggle.contains(event.target) && !catbar.contains(event.target)) {
      catbar.classList.remove('active');
  }
};

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle('fa-close');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  if (navbar.classList.contains('active')) {
      menu.classList.remove('fa-close');
      navbar.classList.remove('active');
  }
};

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
  }
