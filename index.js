const LOADER_DURATION = 2500;
const LOADER_FADE_DURATION = 450;

const body = document.body;
const loader = document.querySelector('.loader');
const images = document.querySelectorAll('.invitation__image');

const revealImage = (image) => {
    image.classList.add('is-visible');
};

const startImageReveal = () => {
    if (!('IntersectionObserver' in window)) {
        images.forEach(revealImage);
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            revealImage(entry.target);
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.20,
    });

    images.forEach((image) => observer.observe(image));
};

const showSite = () => {
    body.classList.remove('is-loading');
    body.classList.add('is-ready');
    startImageReveal();

    if (loader) {
        window.setTimeout(() => {
            loader.setAttribute('hidden', '');
        }, LOADER_FADE_DURATION);
    }
};

window.setTimeout(showSite, loader ? LOADER_DURATION : 0);
