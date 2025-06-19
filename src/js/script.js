// Responsive Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close navbar on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (!name || !email || !message) {
    formMsg.textContent = 'Please fill in all fields.';
    formMsg.style.color = '#ad1457';
    return;
  }
  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMsg.textContent = 'Please enter a valid email address.';
    formMsg.style.color = '#ad1457';
    return;
  }
  // Success message
  formMsg.textContent = 'Thank you for your message!';
  formMsg.style.color = '#6a1b9a';
  contactForm.reset();
}); 
