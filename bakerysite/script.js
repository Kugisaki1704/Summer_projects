document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('#navbar-list a');
  
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        const offset = target.offsetTop;
  
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      });
    });
  });

 