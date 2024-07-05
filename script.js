document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('mousemove', function(e) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.width = '20px'; 
    ripple.style.height = '100px'; 
    ripple.style.background = 'rgba(155, 224, 220, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transition = 'all 0.5s ease-out'; 
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY-50}px`; 
    document.body.appendChild(ripple);

    ripple.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(0)';

    setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) rotate(360deg) scale(1)';
        ripple.style.opacity = '0'; // Fade out effect
    }, 100);

    setTimeout(() => ripple.remove(), 1000);
});



