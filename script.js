// script.js

// Typing effect
new TypeIt("#typing", {
  strings: ["Web Developer", "Cloud Enthusiast", "Freelancer"],
  speed: 100,
  breakLines: false,
  loop: true
}).go();

// Load JSON data
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    populateSection('projects-container', data.projects);
    populateSection('education-container', data.education);
    populateSection('experience-container', data.experience);
  })
  .catch(err => console.error('Error loading data:', err));

function populateSection(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}

// Particles.js background
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json', function() {
  console.log('Particles.js loaded');
});
