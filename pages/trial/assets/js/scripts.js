
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
    setTimeout(showSlides, 3000);
  };

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
