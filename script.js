document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const page = event.target.getAttribute('data-page');
        
        pages.forEach(pageSection => {
          if (pageSection.id === page) {
            pageSection.classList.add('active');
          } else {
            pageSection.classList.remove('active');
          }
        });
      });
    });
  });
  