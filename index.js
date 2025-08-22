const slides = [
  { img: "1.jpg", text: "Reason 1: You make me laugh." },
  { img: "2.jpg", text: "Reason 2: You always listen to me." },
  { img: "3.jpg", text: "Reason 3: You believe in me." },
  { img: "4.jpg", text: "Reason 4: You forgive me when I mess up." },
  { img: "5.gif", text: "Reason 5: You make boring days fun." },
  { img: "6.jpg", text: "Reason 6: You’re my safe place." },
  { img: "7.jpg", text: "Reason 7: You push me to be better." },
  { img: "8.jpg", text: "Reason 8: You care in little ways." },
  { img: "9.jpg", text: "Reason 9: You surprise me with your love." },
  { img: "10.jpg", text: "Reason 10: You’re simply you ❤️" }
];

// Grab elements (must match IDs in HTML)
const imgEl = document.getElementById("slide-image");
const textEl = document.getElementById("slide-text");
const counterEl = document.getElementById("counter");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Track current index
let currentIndex = 0;

// Function to update slide
function updateSlide() {
  imgEl.src = slides[currentIndex].img;
  textEl.textContent = slides[currentIndex].text;
  counterEl.textContent = `${currentIndex + 1} / ${slides.length}`;
}

// Button events
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

// Init first slide
updateSlide();