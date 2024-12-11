document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations for sections
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => observer.observe(section));

    // Hover effect fix for gallery images
    const galleryWrappers = document.querySelectorAll('.gallery-wrapper');

    galleryWrappers.forEach((wrapper) => {
        const images = wrapper.querySelectorAll('.gallery img');
        images.forEach((image) => {
            image.addEventListener('mouseover', () => {
                image.style.zIndex = '10'; // Bring hovered image to the front
            });

            image.addEventListener('mouseout', () => {
                image.style.zIndex = '1'; // Reset z-index
            });
        });
    });
});

