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
    const number3 = document.getElementById('counter2');
    const number4 = document.getElementById('counter3');


    // Fade in the numbers
    setTimeout(() => {
      number1.classList.add('visible');
      number2.classList.add('visible');
      number3.classList.add('visible');
      number4.classList.add('visible');
      incrementNumber(number1, 3990);
      incrementNumber(number2, 2550);
      incrementNumber(number3, 3990);
      incrementNumber(number4, 2550);
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


  
       // Optional: You can add JavaScript to trigger the animation on an event, like a button click.
        // For now, the animation will start automatically when the page loads.
        document.addEventListener('DOMContentLoaded', () => {
            const image1 = document.querySelector('.image1');
            const image2 = document.querySelector('.image2');

            // Trigger the animation by adding a class or directly using the CSS animation
            image1.style.animation = 'slideDown 2s forwards';
            image2.style.animation = 'slideRight 2s forwards';
        });



// Select the images
const imagez = document.querySelectorAll('.image');

// Set up the Intersection Observer
const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('image1')) {
                entry.target.style.animation = 'slideDown 2s forwards'; // Trigger animation for image1
            }
            if (entry.target.classList.contains('image2')) {
                entry.target.style.animation = 'slideRight 2s forwards'; // Trigger animation for image2
            }
            observers.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the image is in view
});

// Observe each image
imagez.forEach(image => {
    observer.observe(image);
});


document.getElementsByClassName('slidebutton').addEventListener('click', function(event) {
    event.preventDefault();
})