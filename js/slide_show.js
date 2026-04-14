
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].setAttribute("aria-hidden", "true");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      dots[i].setAttribute("aria-pressed", "false");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].setAttribute("aria-hidden", "false");
  dots[slideIndex-1].className += " active";
  dots[slideIndex-1].setAttribute("aria-pressed", "true");
}
