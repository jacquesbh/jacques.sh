document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.classList.contains('contact-button')) {
            e.target.click();
        }
    });
});