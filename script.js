// Smooth Scroll Effect
document.querySelectorAll('.navbar .nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (if applicable)
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.navbar .nav-links');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Simple Form Validation (if applicable)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        let isValid = true;
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        
        if (!nameInput.value) {
            isValid = false;
            alert('Please enter your name.');
        }

        if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if invalid
        }
    });
}
