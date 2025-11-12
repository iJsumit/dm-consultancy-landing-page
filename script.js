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

document.addEventListener("DOMContentLoaded", function () {
    // Select the form
    const form = document.querySelector(".hero-form");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent page reload

        // Get all input values
        const fullName = form.querySelector('input[placeholder="Full Name"]').value;
        const email = form.querySelector('input[placeholder="Work Email"]').value;
        const phone = form.querySelector('input[placeholder="Phone Number"]').value;
        const website = form.querySelector('input[placeholder="Company Website"]').value;

        // Log values to console
        // console.log("Form Data:");
        // console.log("Full Name:", fullName);
        // console.log("Work Email:", email);
        // console.log("Phone Number:", phone);
        // console.log("Company Website:", website);

        let formData = {
            fullName: fullName,
            email: email,
            phone: phone,
            website: website
        };
        console.log(formData);
    });
});