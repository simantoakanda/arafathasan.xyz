$(document).ready(function() {
  // Add the "navbar-shrink" class to the navbar when the page is scrolled down
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("#navbar").addClass("navbar-shrink");
    } else {
      $("#navbar").removeClass("navbar-shrink");
    }
  });

  // Toggle search bar visibility
  $("#searchBtn").click(function() {
    $(".form-inline").toggleClass("search-visible");
  });
});

   // Wait for the document to be fully loaded
   document.addEventListener("DOMContentLoaded", function() {
    // Set the time interval (in milliseconds) for slide change
    const interval = 5000; // Change slide every 5 seconds

    // Get all carousel items
    const carouselItems = document.querySelectorAll(".carousel-item");

    // Initialize the slide index and start the automatic slideshow
    let slideIndex = 0;
    showSlide(slideIndex);

    // Function to show the current slide and hide others
    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    // Function to move to the next slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= carouselItems.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = carouselItems.length - 1;
      }
      showSlide(slideIndex);
    }

    // Start the automatic slideshow
    let slideInterval = setInterval(nextSlide, interval);

    // Add event listeners to pause and resume the slideshow when hovering over the carousel
    const carousel = document.querySelector("#carouselExampleIndicators");
    carousel.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    carousel.addEventListener("mouseleave", () => {
      slideInterval = setInterval(nextSlide, interval);
    });

    // Add event listeners to control the slideshow with navigation buttons
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  });


// Function to animate the counter values
function animateCounter() {
  const counters = document.querySelectorAll('.number');
  const speed = 200; // The lower the value, the faster the animation

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-number');
          const count = +counter.innerText;
          const increment = target / speed;

          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 1);
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  });
}

// Function to animate the counter numbers
function animateCounter(targetElement) {
  const start = 0;
  const end = parseInt(targetElement.getAttribute("data-number"));
  const duration = 2000; // Animation duration in milliseconds
  const step = 50; // Update interval in milliseconds
  const increment = (end - start) / (duration / step);

  let current = start;
  const timer = setInterval(function () {
      current += increment;
      targetElement.textContent = Math.floor(current);

      if (current >= end) {
          clearInterval(timer);
          targetElement.textContent = end; // Ensure the final value is exact
      }
  }, step);
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scrolling and trigger counter animation
function handleScroll() {
  const counterElements = document.querySelectorAll(".number");
  counterElements.forEach(function (element) {
      if (isElementInViewport(element) && element.textContent === "0") {
          animateCounter(element);
      }
  });
}

// Listen for scroll events and trigger counter animation
window.addEventListener("scroll", handleScroll);

// Initial check for elements in the viewport when the page loads
handleScroll();



document.addEventListener("DOMContentLoaded", function () {
  const testimonies = document.querySelectorAll(".carousel-testimony .item");
  let currentIndex = 0;

  function showTestimony(index) {
    testimonies.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function autoChangeTestimony() {
    currentIndex = (currentIndex + 1) % testimonies.length;
    showTestimony(currentIndex);
    setTimeout(autoChangeTestimony, 5000); // Change testimonial every 5 seconds (adjust as needed)
  }

  autoChangeTestimony();
});











const textSlider = document.querySelector('.text-slider');
const textItems = ['Web Developer', 'Web Designer', 'Frontend Developer', 'Graphic Designer'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const item = textItems[index];
  const text = item.slice(0, isDeleting ? charIndex - 1 : charIndex + 1);

  textSlider.textContent = text;

  if (!isDeleting && text === item) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && text === '') {
    isDeleting = false;
    index = (index + 1) % textItems.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 150);
  }

  if (charIndex === item.length) {
    charIndex = 0;
  } else {
    charIndex++;
  }
}

window.addEventListener('load', () => {
  type();
});






// JavaScript for automatic color changes
$(document).ready(function () {
  // Function to generate a random color
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // Automatically change background and text color every 5 seconds
  setInterval(function () {
    var backgroundColor = getRandomColor();
    var textColor = getRandomColor();
    $("#contact-section").css("background-color", backgroundColor);
    $("#contact-section").css("color", textColor);
  }, 5000);
});

// JavaScript for button click event
$(document).ready(function () {
  $(".btn-primary").click(function () {
    // Change button color on click
    $(this).css("background-color", getRandomColor());
  });

  // Check if the message box has content and add the "has-content" class
  $("#message").on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });
});



// JavaScript for setting dynamic progress percentages
document.addEventListener("DOMContentLoaded", function() {
  const progressLines = document.querySelectorAll(".progress-line");
  
  progressLines.forEach((line) => {
    const percent = line.getAttribute("data-percent");
    line.style.setProperty("--progress", percent + "%");
  });
});



// JavaScript Code

// Filter functionality
const filters = document.querySelectorAll('.portfolio-filters li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((f) => f.classList.remove('filter-active'));
    filter.classList.add('filter-active');

    const selectedFilter = filter.getAttribute('data-filter');

    portfolioItems.forEach((item) => {
      const itemFilter = item.getAttribute('data-filter');
      if (selectedFilter === '*' || selectedFilter === itemFilter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});





// Wait for the document to be fully loaded
$(document).ready(function () {
  // Filter the projects when a filter option is clicked
  $('.portfolio-flters li').on('click', function () {
    $('.portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');

    const filterValue = $(this).data('filter');
    $('.portfolio-item').hide();

    if (filterValue === '*') {
      $('.portfolio-item').show();
    } else {
      $(filterValue).show();
    }
  });

  // Initialize lightbox plugin for image previews
  $('.glightbox').each(function () {
    $(this).attr('data-gallery', $(this).data('gallery'));
  });
});


$(document).ready(function(){
  $(".carousel-testimony").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000, // Change slide every 5 seconds
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  });
});




// JavaScript for fetching and populating FAQ content
document.addEventListener("DOMContentLoaded", function() {
  // Fetch FAQ data from the server (replace this with your actual data source)
  fetch("faqs.json")
    .then(response => response.json())
    .then(data => {
      // Populate the FAQ sections with the fetched data
      const accordion = document.getElementById("accordion");

      data.forEach((faq, index) => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("panel", "panel-default");

        const faqHeading = document.createElement("div");
        faqHeading.classList.add("faq-heading");
        faqHeading.setAttribute("id", "FaqTitle" + (index + 1));

        const faqTitle = document.createElement("h4");
        faqTitle.classList.add("faq-title");

        const faqLink = document.createElement("a");
        faqLink.classList.add("collapsed");
        faqLink.setAttribute("data-toggle", "collapse");
        faqLink.setAttribute("data-parent", "#accordion");
        faqLink.setAttribute("href", "#faq" + (index + 1));
        faqLink.innerHTML = `<i class="fa fa-question"></i>${faq.question}`;

        faqTitle.appendChild(faqLink);
        faqHeading.appendChild(faqTitle);
        faqItem.appendChild(faqHeading);

        const faqBody = document.createElement("div");
        faqBody.classList.add("panel-collapse", "collapse");
        if (index === 0) {
          faqBody.classList.add("show");
        }
        faqBody.setAttribute("id", "faq" + (index + 1));
        faqBody.setAttribute("role", "tabpanel");
        faqBody.setAttribute("aria-labelledby", "FaqTitle" + (index + 1));
        faqBody.innerHTML = `<div class="faq-body">${faq.answer}</div>`;

        faqItem.appendChild(faqBody);
        accordion.appendChild(faqItem);
      });
    })
    .catch(error => {
      console.error("Error fetching FAQ data: ", error);
    });
});



// Function to animate progress bars when they come into view
function animateProgressBars() {
  let progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(progressBar => {
    let val = progressBar.getAttribute('aria-valuenow');
    progressBar.style.width = val + '%';
  });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event and trigger animation when skills section is in view
function handleScroll() {
  let skillsSection = document.querySelector('.skills-container');

  if (isInViewport(skillsSection)) {
    animateProgressBars();
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add event listener to trigger handleScroll function on scroll
window.addEventListener('scroll', handleScroll);




document.addEventListener("DOMContentLoaded", function() {
  // Function to update progress bars based on countdown
  function updateProgressBars() {
    // Get all progress bars
    var progressBars = document.querySelectorAll('.progress-bar');

    // Iterate through each progress bar
    progressBars.forEach(function(progressBar) {
      // Get the percentage value from the aria-valuenow attribute
      var percentage = parseInt(progressBar.getAttribute('aria-valuenow'));

      // Update the width of the progress bar
      progressBar.style.width = percentage + '%';
    });
  }

  // Start the countdown animation and update progress bars
  setTimeout(function() {
    // Trigger the countdown animation
    document.getElementById('countdown').style.width = '0%';

    // Update progress bars after the countdown animation is complete
    setTimeout(function() {
      updateProgressBars();
    }, 5000); // Adjust this value to match the duration of your countdown animation
  }, 1000); // Delay before starting the countdown animation
});

// Counter Animation
const counters = document.querySelectorAll('.number');
const speed = 200; // The lower the number, the faster the animation

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-number');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});




// JavaScript for Testimonial Carousel Auto Change with Pause on Hover
document.addEventListener('DOMContentLoaded', function () {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const interval = 5000; // Change testimonial every 5 seconds (adjust as needed)

    let currentIndex = 0;
    let timer; // Variable to store the interval timer

    function showTestimonial(index) {
        testimonialItems.forEach(item => {
            item.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(currentIndex);
    }

    function startInterval() {
        timer = setInterval(nextTestimonial, interval);
    }

    function stopInterval() {
        clearInterval(timer);
    }

    // Start the interval when the page loads
    startInterval();

    // Pause the interval when hovering over the carousel
    testimonialCarousel.addEventListener('mouseenter', stopInterval);

    // Resume the interval when leaving the carousel
    testimonialCarousel.addEventListener('mouseleave', startInterval);
});











