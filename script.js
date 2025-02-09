// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth' // Smooth scroll to the target section
      });
    });
  });