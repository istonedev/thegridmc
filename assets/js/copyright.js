document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');

    if (copyrightElement) {
        copyrightElement.textContent = copyrightElement.textContent.replace(
            /\d{4}/,
            `2026 - ${currentYear}`
        );
    }
});