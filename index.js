const images = document.querySelectorAll('.invitation__image');

const revealImage = (image) => {
    image.classList.add('is-visible');
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            revealImage(entry.target);
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
    });

    images.forEach((image) => observer.observe(image));
} else {
    images.forEach(revealImage);
}
