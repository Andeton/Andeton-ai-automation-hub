// script.js

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    const dynamicContent = document.getElementById('dynamic-content');
    setTimeout(() => {
        dynamicContent.innerHTML = '<h2>Loaded Dynamic Content</h2><p>This content was loaded dynamically!</p>';
    }, 2000); // Simulate loading time
});

// Interactive effects
document.querySelectorAll('.interactive-element').forEach(el => {
    el.addEventListener('mouseenter', function() {
        this.classList.add('hover-effect');
    });
    el.addEventListener('mouseleave', function() {
        this.classList.remove('hover-effect');
    });
});