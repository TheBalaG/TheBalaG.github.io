// Toggle Extra Projects
const toggleButton = document.getElementById('toggleProjects');
const extraProjects = document.querySelectorAll('.project-card.extra');
let expanded = false;

toggleButton.addEventListener('click', () => {
  expanded = !expanded;
  extraProjects.forEach(card => {
    card.style.display = expanded ? 'block' : 'none';
  });
  toggleButton.textContent = expanded ? 'Show Less' : 'Show More';
});

// Simple Contact Form Validation + Message
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Thanks for your message!';
    status.style.color = 'green';
    form.reset();
  }
});
