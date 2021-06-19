// PressMe Action
$(document).ready(function () {
  $("#button-love").click(function () {
    let love = confirm("Do you love me?");
    if (love) {
      alert("LOVE U TOO <3 !");
    } else {
      var no = confirm("Are you sure?");
      if (no) {
        while (no) {
          no = confirm("Are you sure?");
        }
        alert("LOVE U TOO <3 !");
      } else {
        alert("LOVE U TOO <3 !");
      }
    }
  });
});

/*===== SCROLL REVEAL =====*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: 2000,
  reset: true,
});

// HEADER
sr.reveal(".carousel-caption", {});

//  MESSAGE
sr.reveal("h1", {});
sr.reveal("p", { interval: 400, delay: 200 });
// FOOTER
sr.reveal("h3", {});
// BUTTON
const srdefault = ScrollReveal({
  origin: "bottom",
  distance: "0px",
});

srdefault.reveal(".btn");

// GALLERY MODAL
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
