const cardContainer = document.querySelector('.card-container');
const projectsSection = document.querySelector('.projects');

// Pause scrolling when the mouse is over the section
projectsSection.addEventListener('mouseenter', () => {
  cardContainer.style.animationPlayState = 'paused';
});

// Resume scrolling when the mouse leaves the section
projectsSection.addEventListener('mouseleave', () => {
  cardContainer.style.animationPlayState = 'running';
});
