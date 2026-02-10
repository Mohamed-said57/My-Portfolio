// ===========================
// LANGUAGE TOGGLE FUNCTIONALITY
// ===========================

let currentLang = 'en'; // Default language is English

function toggleLanguage() {
    const body = document.body;
    const langToggle = document.getElementById('langToggle');
    
    if (currentLang === 'en') {
        // Switch to Arabic
        currentLang = 'ar';
        body.setAttribute('dir', 'rtl');
        langToggle.textContent = 'English';
        updateContent('ar');
    } else {
        // Switch to English
        currentLang = 'en';
        body.setAttribute('dir', 'ltr');
        langToggle.textContent = 'العربية';
        updateContent('en');
    }
}

function updateContent(lang) {
    // Get all elements with data-en and data-ar attributes
    const elements = document.querySelectorAll('[data-en][data-ar]');
    
    elements.forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-ar');
        }
    });
}

// ===========================
// MOBILE MENU TOGGLE
// ===========================

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a nav link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        });
    });
});

// ===========================
// CONTACT FORM SUBMISSION
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        
        // Get form values (for future backend integration)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a backend server
        // For now, we'll just show the success popup
        
        // Show success popup
        showPopup();
        
        // Reset form
        contactForm.reset();
    });
});

// ===========================
// SUCCESS POPUP FUNCTIONS
// ===========================

function showPopup() {
    const popup = document.getElementById('successPopup');
    popup.classList.add('show');
    
    // Auto-close popup after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

function closePopup() {
    const popup = document.getElementById('successPopup');
    popup.classList.remove('show');
}

// Close popup when clicking outside the popup content
window.addEventListener('click', function(e) {
    const popup = document.getElementById('successPopup');
    if (e.target === popup) {
        closePopup();
    }
});

// ===========================
// SMOOTH SCROLL ENHANCEMENT
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 212, 255, 0.15)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 212, 255, 0.1)';
    }
});

// ===========================
// SKILL BARS ANIMATION ON SCROLL
// ===========================

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

// Run on scroll and on page load
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
