// La Green Touch - Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  initMobileMenu();

  // Smooth Scroll
  initSmoothScroll();

  // Add to Cart functionality
  initAddToCart();

  // Newsletter Form
  initNewsletterForm();

  // Image Lazy Loading
  initLazyLoading();

  // Scroll animations
  initScrollAnimations();

  // Product card hover effects
  initProductCardEffects();

  // Search functionality
  initSearch();
});

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const nav = document.querySelector('.navigation');
      if (nav) {
        const isOpen = nav.classList.contains('is-open');
        nav.classList.toggle('is-open');
        nav.style.display = isOpen ? 'none' : 'flex';
        this.setAttribute('aria-expanded', !isOpen);
      }
    });
  }

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('.navigation');
    const menuToggle = document.getElementById('menuToggle');
    if (nav && nav.classList.contains('is-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('is-open');
      nav.style.display = 'none';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add to Cart
function initAddToCart() {
  const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', async function(e) {
      e.preventDefault();

      const productId = this.getAttribute('data-product-id');
      const quantity = parseInt(this.getAttribute('data-quantity')) || 1;

      // Add loading state
      const originalText = this.innerHTML;
      this.innerHTML = '<span class="loading-spinner"></span>';
      this.disabled = true;

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: [{
              id: productId,
              quantity: quantity
            }]
          })
        });

        const data = await response.json();

        // Update cart count
        updateCartCount();

        // Show success feedback
        this.innerHTML = '✓ Ajouté';
        this.classList.add('added');

        setTimeout(() => {
          this.innerHTML = originalText;
          this.classList.remove('added');
          this.disabled = false;
        }, 2000);

      } catch (error) {
        console.error('Error adding to cart:', error);
        this.innerHTML = 'Erreur';
        setTimeout(() => {
          this.innerHTML = originalText;
          this.disabled = false;
        }, 2000);
      }
    });
  });
}

// Update cart count
async function updateCartCount() {
  try {
    const response = await fetch('/cart.js');
    const cart = await response.json();
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
      el.textContent = cart.item_count;
      if (cart.item_count > 0) {
        el.classList.add('has-items');
      }
    });
  } catch (error) {
    console.error('Error updating cart count:', error);
  }
}

// Newsletter Form
function initNewsletterForm() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      const submitBtn = this.querySelector('button[type="submit"]');

      if (!email) return;

      // Add loading state
      submitBtn.disabled = true;
      const originalContent = submitBtn.innerHTML;
      submitBtn.innerHTML = '...';

      try {
        const formData = new FormData();
        formData.append('form_type', 'customer');
        formData.append('email', email);

        await fetch('/contact', {
          method: 'POST',
          body: formData
        });

        // Success feedback
        emailInput.value = '';
        submitBtn.innerHTML = '✓';
        submitBtn.classList.add('success');

        setTimeout(() => {
          submitBtn.innerHTML = originalContent;
          submitBtn.classList.remove('success');
          submitBtn.disabled = false;
        }, 3000);

      } catch (error) {
        console.error('Newsletter error:', error);
        submitBtn.innerHTML = '✗';
        setTimeout(() => {
          submitBtn.innerHTML = originalContent;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  });
}

// Lazy Loading Images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
}

// Scroll Animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => animationObserver.observe(el));
  }
}

// Product Card Effects
function initProductCardEffects() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.querySelector('.search-input');

  if (searchInput) {
    const debouncedSearch = debounce(async function(query) {
      if (query.length < 2) return;

      try {
        const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product,article,page`);
        const data = await response.json();
        // Handle search suggestions if needed
        console.log('Search suggestions:', data);
      } catch (error) {
        console.error('Search error:', error);
      }
    }, 300);

    searchInput.addEventListener('input', function(e) {
      debouncedSearch(e.target.value);
    });

    // Handle search form submission
    const searchForm = searchInput.closest('form');
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        if (!searchInput.value.trim()) {
          e.preventDefault();
        }
      });
    }
  }
}

// Quantity selector
function initQuantitySelector() {
  const quantitySelectors = document.querySelectorAll('.quantity-selector');

  quantitySelectors.forEach(selector => {
    const minusBtn = selector.querySelector('.qty-minus');
    const plusBtn = selector.querySelector('.qty-plus');
    const input = selector.querySelector('.qty-input');

    if (minusBtn && plusBtn && input) {
      minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change'));
        }
      });

      plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        const max = parseInt(input.getAttribute('max')) || 99;
        if (currentValue < max) {
          input.value = currentValue + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  });
}

// Product variant selector
function initVariantSelector() {
  const variantSelectors = document.querySelectorAll('.variant-selector');

  variantSelectors.forEach(selector => {
    selector.addEventListener('change', function() {
      const form = this.closest('form');
      const variantId = this.value;

      // Update hidden input
      const variantInput = form.querySelector('[name="id"]');
      if (variantInput) {
        variantInput.value = variantId;
      }

      // Update price display
      const priceElement = form.querySelector('.product-price');
      const variant = JSON.parse(this.options[this.selectedIndex].getAttribute('data-variant') || '{}');
      if (priceElement && variant.price) {
        priceElement.textContent = formatPrice(variant.price);
      }
    });
  });
}

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price / 100);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Cookie consent (basic implementation)
function initCookieConsent() {
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <p>Nous utilisons des cookies pour améliorer votre expérience.</p>
      <button class="accept-cookies btn btn-primary">Accepter</button>
    `;
    document.body.appendChild(banner);

    banner.querySelector('.accept-cookies').addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'accepted');
      banner.remove();
    });
  }
}

// Sticky header behavior
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', throttle(() => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
  }, 100));
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
  initQuantitySelector();
  initVariantSelector();
  initStickyHeader();
});
