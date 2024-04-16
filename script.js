var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  var messages = ["Happy Birthday, Friend! 🎉", "Hope you have a fantastic day! 🎈", "Wishing you all the best! 🎂"];
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  document.querySelector('.message').textContent = messages[slideIndex-1];
}
