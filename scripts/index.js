// Assigning my html elements variables
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Adding event listener to the button whent the user taps the button.
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
var slides = document.querySelectorAll(".graduationPics");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

window.onload = function () {
  // Intersection Observer for videos
  const videoCallback = (entries, observer) => {
    for (const entry of entries) {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play();
        video.muted = true;
      } else {
        video.pause();
      }
    }
  };

  const videoOptions = { threshold: 1 };
  const videoObserver = new IntersectionObserver(videoCallback, videoOptions);

  const videos = Array.from(document.getElementsByTagName("video"));

  for (const video of videos) {
    video.muted = false;
    videoObserver.observe(video);
  }

  // Intersection Observer for audio
  const audioCallback = (entries, observer) => {
    for (const entry of entries) {
      const audio = entry.target;
      if (entry.isIntersecting) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  const audioOptions = { threshold: 1 };
  const audioObserver = new IntersectionObserver(audioCallback, audioOptions);

  const audios = Array.from(document.getElementsByTagName("audio"));

  for (const audio of audios) {
    audio.muted = false;
    audioObserver.observe(audio);
  }
};

// Get all menu items and sections
const menuItems = document.querySelectorAll(".side-nav-menu li a");
const sections = document.querySelectorAll(".section");

// Create an IntersectionObserver to detect when a section is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If a section is in view, add the "active" class to its corresponding menu item
    const id = entry.target.getAttribute("id");
    const menuItem = document.querySelector(
      `.side-nav-menu li a[href="#${id}"]`
    );
    if (entry.isIntersecting) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });
});

// Observe all sections
sections.forEach((section) => observer.observe(section));
