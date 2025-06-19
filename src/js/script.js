// Responsive navbar toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Simple contact form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let error = '';

  if (!name) error += 'Name is required. ';
  if (!email || !/\S+@\S+\.\S+/.test(email)) error += 'Valid email is required. ';
  if (!message) error += 'Message cannot be empty. ';

  const msgDiv = document.getElementById('formMessage');
  msgDiv.style.color = error ? 'red' : 'green';
  msgDiv.textContent = error ? error : 'Thank you for your message!';

  if (!error) this.reset();
});
  
