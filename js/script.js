document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#4ca1af';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = 'white';
    });
});