const header = document.getElementById('top');

// Adjust the height based on scroll position
window.onscroll = function() {
  let scroll = window.scrollY;

  // If the scroll position is greater than 100px, reduce the header height
  if (scroll > 100) {
    header.style.height = '10px';  // Shrinks to 30px
  } else {
    header.style.height = '50px';  // Original height when at the top
  }
};






const images = document.querySelectorAll('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const totalImages = images.length;

// Function to update the background images and apply smooth transition
function changeImage() {
  images.forEach((image, index) => {
    image.style.opacity = (index === currentIndex) ? '1' : '0';
  });
}

// Automatic image transition every 3 seconds
function startAutoSlide() {
  return setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    changeImage();
  }, 3000);
}



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active"); // Add 'active' class when visible
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% of the element is visible
});

// Select the carousel-text div and observe it
const textElement = document.querySelector('.carousel-text');
observer.observe(textElement);










let autoSlide = startAutoSlide();

// Event listeners for manual navigation
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  changeImage();
  resetAutoSlide();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  changeImage();
  resetAutoSlide();
});

// Reset auto-slide on manual interaction
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = startAutoSlide();
}






  window.onload = function() {
    const number1 = document.getElementById('counter');
    const number2 = document.getElementById('counter1');

    // Fade in the numbers
    setTimeout(() => {
      number1.classList.add('visible');
      number2.classList.add('visible');
      incrementNumber(number1, 3990);
      incrementNumber(number2, 2550);
    }, 1000); // Delay the fade-in slightly for effect
    
    function incrementNumber(element, target) {
      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue < target) {
          currentValue += 50; // Increment step
          element.textContent = currentValue;
        } else {
          clearInterval(interval);
        }
      }, 20); // Time interval for the increment
    }
  };


