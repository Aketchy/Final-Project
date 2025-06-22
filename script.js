// Mobile Navigation Toggle
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
    });
});

// Contact Form Validation (Basic)
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all the fields before submitting.');
    }
    });
}
