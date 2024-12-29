// Products data
const products = [
  {
    id: "netflix",
    name: "Netflix",
    icon: `<svg width="40" height="40" viewBox="-49.6 0 222 222" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(12.495 6.756)">
              <g transform="translate(81.631 113.771) scale(.29074)">
                <path d="M-52.5-412.3l-.3 168-.3 168-13.8-39v-.1l-17.9 374c17.6 49.6 27 76.1 27.1 76.2.1.1 10.1.7 22.2 1.3 36.6 1.8 82 5.7 116.5 10 8 1 14.8 1.5 15.3 1.1s.6-171.4.5-380.1l-.3-379.4h-149z" fill="#e50914"/>
                <path d="M-322-412.8V-33c0 208.9.2 380 .5 380.3.3.3 13.2-1 28.8-2.7 15.6-1.7 37.1-3.9 47.8-4.8 16.4-1.4 65.6-4.5 71.2-4.6 1.7 0 1.8-8.5 2-160.9l.3-160.9 11.9 33.6c1.8 5.2 2.4 6.8 4.2 11.9l17.9-373.9c-3.8-10.7-1.8-5.1-6.1-17.3-14.6-41.3-27-76.2-27.5-77.8l-1-2.8h-150z" fill="#e50914"/>
                <path d="M-322-412.8l150.5 426.5v-.2l11.9 33.6C-93.5 234.2-58 334.6-57.8 334.8c.1.1 10.1.7 22.2 1.3 36.6 1.8 82 5.7 116.5 10 7.9 1 14.8 1.5 15.2 1.1L-53.1-76.4v.1l-13.8-39c-13.5-38.1-22.5-63.6-76.8-217-14.6-41.3-27-76.2-27.5-77.8l-1-2.8h-74.9l-74.9.1z" fill="#e50914"/>
              </g>
            </g>
          </svg>`,
    price: { egp: 100, usdt: 2 },
    features: [
      "Premium UHD Subscription",
      "Supports TV, Mobile, PC",
      "Downloads Available",
      "Ad-Free Experience"
    ],
    purchaseLink: "netflix-purchase",
    isPopular: true,
    visible: true,
    searchTags: "streaming movies tv shows series entertainment premium uhd 4k"
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    icon: `<svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <circle cx="512" cy="512" r="512" style="fill:#da3940" />
            <path d="M389.1 717.9c-57.5 0-94.2-32.3-94.2-77.2 0-14.8 4.4-32.8 21.4-69.5H256l55.3-118.3h385c8.8 0 14.8-6.6 14.8-14.2 0-7.7-6-14.2-14.8-14.2H384.7l27.4-58.6c17-36.1 53.7-59.7 93.6-59.7h130.9c75.6 0 131.4 52 131.4 119.9 0 80.5-73.9 145.1-159.3 145.1h-253c-7.7 15.9 1.1 28.5 19.7 28.5h201.5c33.4 0 59.1 23.5 59.1 53.7 0 34.5-33.4 64.6-71.2 64.6H389.1v-.1z" style="fill:#fff" />
          </svg>`,
    price: { egp: 100, usdt: 2 },
    features: [
      "Secure & Private Access",
      "Mobile Account (Android/iOS)",
      "PC Activation Key (Windows/Mac)",
      "Access to Global Servers"
    ],
    purchaseLink: "express-purchase",
    isPopular: true,
    visible: true,
    searchTags: "secure private access mobile pc global servers vpn"
  },
  {
    id: "browserstack",
    name: "BrowserStack",
    icon: `<svg height="40" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="127" fill="#f5bb60" />
            <circle cx="115" cy="115" r="114" fill="#e86f32" />
            <circle cx="130" cy="100" r="99" fill="#e53d42" />
            <circle cx="138" cy="108" r="91" fill="#bfd141" />
            <circle cx="131" cy="115" r="84" fill="#6db64c" />
            <circle cx="118" cy="101" r="71" fill="#afdbe7" />
            <circle cx="129" cy="89" r="59" fill="#57badf" />
            <circle cx="137" cy="97" r="52" fill="#02b2d6" />
            <circle cx="129" cy="104" r="44" fill="#231f20" />
          </svg>`,
    price: { egp: 100, usdt: 2 },
    features: [
      "Real Device Access",
      "Automated Testing for Shared Accounts",
      "Cross-Browser & Platform Coverage",
      "Round-the-Clock Assistance"
    ],
    purchaseLink: "browserstack-purchase",
    isPopular: true,
    visible: true,
    searchTags: "testing cross-browser platform device access automation"
  },
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#202123"/>
          </svg>`,
    price: { egp: 100, usdt: 2 },
    features: [
      "Access to OpenAI o1 & o1 mini and latest models available",
      "Faster Response Times",
      "Priority Access to New Features",
      "Available During Peak Times"
    ],
    purchaseLink: "chatgpt-purchase",
    isPopular: true,
    visible: true,
    searchTags: "ai assistant openai gpt-4 fast response priority access"
  }
];

// Load and render products
function loadProducts() {
  console.log('Starting loadProducts function');
  const plansGrid = document.querySelector('.plans-grid');
  
  if (!plansGrid) {
    console.error('Could not find .plans-grid element');
    return;
  }

  console.log(`Found ${products.length} products to render`);

  // Clear existing content except no-results div
  const noResults = plansGrid.querySelector('.no-results');
  plansGrid.innerHTML = '';
  if (noResults) {
    plansGrid.appendChild(noResults);
  }

  // Filter and render visible products
  products
    .filter(product => product.visible)
    .forEach(product => {
      console.log(`Rendering product: ${product.name}`);
      const card = document.createElement('div');
      card.className = `plan-card${product.isPopular ? ' highlight' : ''}`;
      card.setAttribute('data-plan-name', product.id);
      card.setAttribute('data-features', product.searchTags);

      card.innerHTML = `
        <div class="product-header">
          <span class="product-icon">${product.icon}</span>
          <h3>${product.name}</h3>
        </div>
        <p class="price">${product.price.egp} EGP or ${product.price.usdt} USDT / Month</p>
        <ul class="features-list">
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <a href="${product.purchaseLink}" class="buy-button">Buy Now</a>
        ${product.isPopular ? '<div class="badge">Most Popular</div>' : ''}
      `;

      // Set initial center alignment for product header
      const productHeader = card.querySelector('.product-header');
      productHeader.style.justifyContent = 'center';

      plansGrid.appendChild(card);
    });

  console.log('Finished rendering products');
  setupSearch();
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('planSearch');
  if (!searchInput) {
    console.error('Could not find search input');
    return;
  }

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const planCards = document.querySelectorAll('.plan-card');
    const noResults = document.querySelector('.no-results');
    let hasVisibleCards = false;

    planCards.forEach(card => {
      const planName = card.getAttribute('data-plan-name').toLowerCase();
      const features = card.getAttribute('data-features').toLowerCase();
      const searchString = `${planName} ${features}`;

      if (searchString.includes(searchTerm)) {
        card.classList.remove('hidden');
        // Keep product header centered even when card is visible
        const productHeader = card.querySelector('.product-header');
        productHeader.style.justifyContent = 'center';
        hasVisibleCards = true;
      } else {
        card.classList.add('hidden');
      }
    });

    if (noResults) {
      noResults.classList.toggle('visible', !hasVisibleCards);
    }
  });
}

// FAQ functionality
function setupFAQ() {
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
}

// Back to top button
function setupBackToTop() {
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.className = 'back-to-top';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('show', window.pageYOffset > 300);
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Mobile navigation
function setupMobileNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

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
}

// Initialize everything
function init() {
  console.log('Initializing application...');
  loadProducts();
  setupFAQ();
  setupBackToTop();
  setupMobileNav();
}

// Run initialization
console.log('Script loaded, checking document state');
if (document.readyState === 'loading') {
  console.log('Document still loading, adding DOMContentLoaded listener');
  document.addEventListener('DOMContentLoaded', init);
} else {
  console.log('Document already loaded, running init immediately');
  init();
}

// Add error handler for script loading issues
window.onerror = function(msg, url, lineNo, columnNo, error) {
  console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
  return false;
};