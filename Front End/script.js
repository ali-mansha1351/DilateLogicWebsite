// Generic auto-slider function
function autoSlider(sectionSelector, interval) {
  let offset = 0;

  function slide() {
    const section = document.querySelector(sectionSelector);
    const wrapper = section.querySelector('.cards-wrapper');
    const cardWidth = wrapper.querySelector('.card').offsetWidth + 20; // card + margin
    const totalCards = wrapper.children.length;
    const maxOffset = (totalCards - 1) * cardWidth; // Maximum scrollable width

    offset += cardWidth;

    if (offset > maxOffset) {
      offset = 0; // Reset to the start
    }

    wrapper.style.transform = `translateX(-${offset}px)`;
  }

  setInterval(slide, interval);
}

// Initialize sliders for both sections
autoSlider('.portfolio', 2000); // Portfolio Section
autoSlider('.services', 2000);  // Services Section

