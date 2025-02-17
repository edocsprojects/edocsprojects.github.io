window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight) {
        footer.classList.add('footer-visible');
    } else {
        footer.classList.remove('footer-visible');
    }
});
