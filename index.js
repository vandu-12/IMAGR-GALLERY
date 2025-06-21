let scrollPosition = 0;
const gallery = document.getElementById("gallery");
const imageWidth = 320; // approx image + margin

function nextSlide() {
  if (scrollPosition < gallery.scrollWidth - gallery.clientWidth) {
    scrollPosition += imageWidth * 3;
    gallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }
}

function prevSlide() {
  scrollPosition = Math.max(0, scrollPosition - imageWidth * 3);
  gallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
}
