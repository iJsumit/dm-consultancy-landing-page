document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer for scroll animations
    const targets = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    targets.forEach(target => {
        // Set individual delays based on a CSS custom property
        // e.g., <div class="animate-on-scroll" style="--scroll-delay: 0.2s;">
        // This is handled automatically by the CSS transition-delay
        observer.observe(target);
    });

    // Navbar shrink on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
});