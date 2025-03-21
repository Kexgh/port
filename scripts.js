// Loading animation
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingBar = document.querySelector('.loading-bar');
    
    // Animate the loading bar
    loadingBar.style.width = '100%';
    
    // Hide loading screen after animation completes
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.visibility = 'hidden';
        }, 600);
    }, 2000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const root = document.documentElement;

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('dark-mode-active');
    
    if (darkModeToggle.classList.contains('dark-mode-active')) {
        // Switch to dark mode
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#f5f5f7';
        document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        document.querySelectorAll('.nav-links a, .logo').forEach(el => {
            el.style.color = '#f5f5f7';
        });
        document.querySelectorAll('.skill-card, .project-card, .education-card').forEach(el => {
            el.style.backgroundColor = '#1d1d1f';
            el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        document.querySelectorAll('.education-card h3, .education-card h4').forEach(el => {
            el.style.color = '#f5f5f7';
        });
        document.querySelectorAll('input, textarea').forEach(el => {
            el.style.backgroundColor = '#1d1d1f';
            el.style.color = '#f5f5f7';
            el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        document.querySelectorAll('.project-tag, .module-tag').forEach(el => {
            el.style.backgroundColor = '#000';
        });
    } else {
        // Switch to light mode
        document.body.style.backgroundColor = '#f5f5f7';
        document.body.style.color = '#1d1d1f';
        document.querySelector('header').style.backgroundColor = 'rgba(245, 245, 247, 0.8)';
        document.querySelectorAll('.nav-links a, .logo').forEach(el => {
            el.style.color = '#000';
        });
        document.querySelectorAll('.skill-card, .project-card, .education-card').forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.borderColor = 'rgba(0, 0, 0, 0.05)';
        });
        document.querySelectorAll('.education-card h3, .education-card h4').forEach(el => {
            el.style.color = '#1d1d1f';
        });
        document.querySelectorAll('input, textarea').forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.color = '#1d1d1f';
            el.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        });
        document.querySelectorAll('.project-tag, .module-tag').forEach(el => {
            el.style.backgroundColor = '#f5f5f7';
        });
    }
});

// Reveal animations on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with opacity 0
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});
