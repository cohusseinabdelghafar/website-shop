// FAQ Functionality with smooth transitions
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.maxHeight = null;
      ans.style.opacity = '0';
    });

    if (!isOpen) {
      answer.style.display = 'block';
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.opacity = '1';
    } else {
      answer.style.maxHeight = null;
      answer.style.opacity = '0';
    }
  });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add loading states to buttons
document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const originalText = button.textContent;
    button.innerHTML = '<span class="loading-spinner"></span> Processing...';
    
    // Simulate loading (remove in production)
    setTimeout(() => {
      button.textContent = originalText;
    }, 1000);
  });
});

// Mobile Navigation
const createMobileNav = () => {
  const nav = document.querySelector('.nav');
  const hamburger = document.createElement('button');
  hamburger.className = 'mobile-menu-button';
  hamburger.innerHTML = '☰';
  
  if (window.innerWidth <= 768) {
    nav.classList.add('mobile');
    nav.parentElement.insertBefore(hamburger, nav);
    
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      hamburger.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    });
  }
};

// Initialize mobile nav
createMobileNav();
window.addEventListener('resize', createMobileNav);

// FAQ Search functionality
const createFAQSearch = () => {
  const faqSection = document.querySelector('.faq-section .container');
  const searchContainer = document.createElement('div');
  searchContainer.className = 'faq-search';
  searchContainer.innerHTML = `
    <input type="text" placeholder="Search FAQ..." class="faq-search-input">
  `;
  
  faqSection.insertBefore(searchContainer, faqSection.querySelector('.faq-item'));
  
  const searchInput = searchContainer.querySelector('input');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      
      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
};

createFAQSearch();

// Price comparison tooltips
document.querySelectorAll('.plan-card').forEach(card => {
  const price = card.querySelector('.price');
  const tooltip = document.createElement('div');
  tooltip.className = 'price-tooltip';
  tooltip.textContent = 'Best value for money!';
  
  if (card.classList.contains('highlight')) {
    price.appendChild(tooltip);
  }
});