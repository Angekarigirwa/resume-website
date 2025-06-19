// Reveal-on-scroll animation (adapted, original logic reworded)
const requestAnimFrame =
    window.requestAnimationFrame ||
    function (cb) {
        window.setTimeout(cb, 1000 / 60);
    };
const revealElements = document.querySelectorAll('.reveal-when-scroll');

function animateOnScroll() {
    revealElements.forEach((el) => {
        if (elementInViewport(el)) {
            el.classList.add('visible-now');
        } else {
            el.classList.remove('visible-now');
        }
    });
    requestAnimFrame(animateOnScroll);
}

// Start the animation loop
animateOnScroll();

// Check if element is in viewport
function elementInViewport(element) {
    if (typeof jQuery === 'function' && element instanceof jQuery) {
        element = element[0];
    }
    const rect = element.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    );
}

// Smooth scroll to contact form
const contactBtn = document.getElementById('header-btn');
const contactLink = document.getElementById('social-contact');
const contactSection = document.getElementById('contact');

function goToContact() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

contactBtn.addEventListener('click', goToContact);
contactLink.addEventListener('click', goToContact);

// Remove anti-bot field
const noBotsField = document.getElementById('contact-form-no-bots');
if (noBotsField) {
    noBotsField.parentNode.removeChild(noBotsField);
}
  
