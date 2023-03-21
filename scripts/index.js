
Assigning my html elements variables
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");


Adding event listener to the button whent the user taps the button.
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});
var slides = document.querySelectorAll('.graduationPics');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// CReating a photo slideshow
// var slideIndex = 0;
//     showSlides();

//     function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("graduationPics");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

window.onload = function(){
  //
  //Collect the 2 key parameters of an intersection observer object
  //
  //1. The callback function to call whenever we scroll
  const callback = (entries, observer)=>{
     //
     //For each observed entry-----
     for(const entry of entries){
         //
         //----get the target element (as an audio)
         const audio =entry.target;
         //
         //----if the audio ntersets with the view port....
         if (entry.isIntersecting) {
             //
             //...play the audio
             audio.play();
         }
         //
         //...otherwise
         else {
             //
             //Pause the audio
             audio.pause();
         };
     }
 };
 //
 //2. The options for controlling the intersection.
 //In our case the options are:-
 //- There is intersection if at least half of the audio is visible
 const options = {threshold:.5};
 //
 //Create a new intersection observer object
 const observer = new IntersectionObserver(callback, options);

 //Collect all the audio on this page, as an array
 const audios = Array.from(document.querySelectorAll('audio'));
 //
 //For each audio...
 for(const audio of audios){
     //
     //...mute the audio (otherwise it won't play!)
     audio.muted = flase;
     //
     //...put the audio in the list of observed entries
     observer.observe(audio);
 }
};

// Get all menu items and sections
const menuItems = document.querySelectorAll('.side-nav-menu li a');
const sections = document.querySelectorAll('.section');

// Create an IntersectionObserver to detect when a section is in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If a section is in view, add the "active" class to its corresponding menu item
    const id = entry.target.getAttribute('id');
    const menuItem = document.querySelector(`.side-nav-menu li a[href="#${id}"]`);
    if (entry.isIntersecting) {
      menuItem.classList.add('active');
    } else {
      menuItem.classList.remove('active');
    }
  });
});

// Observe all sections
sections.forEach(section => observer.observe(section));
