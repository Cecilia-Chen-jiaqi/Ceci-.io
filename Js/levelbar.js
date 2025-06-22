 document.addEventListener("DOMContentLoaded", function() {
    const skillLevels = document.querySelectorAll('.skill-level');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
        } else {
            entry.target.style.width = '0';
        }
    });
}, { threshold: 0.1 });

            skillLevels.forEach(level => {
                observer.observe(level);
            });
        });
