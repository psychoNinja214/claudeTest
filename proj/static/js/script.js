document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize a carousel
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const images = carousel.querySelectorAll('.carousel-image');
        const prevBtn = carousel.querySelector('.carousel-arrow.prev');
        const nextBtn = carousel.querySelector('.carousel-arrow.next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        
        let currentIndex = 0;
        
        // Create dots based on number of images
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                showImage(index);
            });
            dotsContainer.appendChild(dot);
        });
        
        const dots = carousel.querySelectorAll('.dot');
        
        // Function to show image at given index
        function showImage(index) {
            // Remove active class from all images and dots
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current image and dot
            images[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // Function to show next image
        function showNextImage() {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= images.length) {
                nextIndex = 0;
            }
            showImage(nextIndex);
        }
        
        // Function to show previous image
        function showPrevImage() {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = images.length - 1;
            }
            showImage(prevIndex);
        }
        
        // Add event listeners for buttons
        nextBtn.addEventListener('click', showNextImage);
        prevBtn.addEventListener('click', showPrevImage);
        

    }
    
    // Initialize each carousel
    const carousel1 = initCarousel('carousel-1');
    const carousel2 = initCarousel('carousel-2');
    
    // You can control carousels externally if needed:
    // For example: carousel1.showNext();
});