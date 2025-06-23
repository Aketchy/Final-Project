// script.js

// Toggle mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Handle form submissions (Get Involved)
document.getElementById("involve-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for getting involved! We'll be in touch soon.");
  this.reset();
});

// Handle form submissions (Contact Us)
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent! We’ll get back to you shortly.");
  this.reset();
});

