document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Create dots for each slide
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => changeSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dots .dot');

    // Function to change slide
    function changeSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Event listeners for next and prev buttons
    nextButton.addEventListener('click', () => {
        changeSlide(currentSlide + 1);
    });

    prevButton.addEventListener('click', () => {
        changeSlide(currentSlide - 1);
    });

    // Auto-slide functionality (Optional)
    setInterval(() => {
        changeSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds
});
