import { loadImages } from './image-loader.js';
import { SLIDER_ITEM_CLASS } from './constants.js';
import { hidePreloader, showPreloader } from './preloader.js'

const startImageSlider = (interval) => {
    let hideImage = false;
    let currentImageIndex = -1;
    let demoImages = document.getElementsByClassName(SLIDER_ITEM_CLASS);

    const changeActiveImage = () => {
        hideImage = true;
        demoImages[currentImageIndex].classList.add('active');
        demoImages[currentImageIndex === 0 ? demoImages.length - 1 : currentImageIndex - 1].classList.remove('active');
    }

    setInterval(() => {
        if (currentImageIndex === demoImages.length - 1) {
            currentImageIndex = 0;
        } else {
            currentImageIndex++;
        }

        changeActiveImage();
    }, interval)
}

const appendImages = (element, images) => {
    const imageNodes = images.reduce((accum, src) => {
        const img = document.createElement('img');
        img.classList.add(SLIDER_ITEM_CLASS)
        img.src = src;
        return [...accum, img]
    }, []);

    imageNodes[0].classList.add('active');
    element.append(...imageNodes);
}

const initializeSlider = async ({ container, interval, slides }) => {
    showPreloader();
    const loadedImages = await loadImages(slides);
    appendImages(container, loadedImages);
    startImageSlider(interval);
    hidePreloader();
}

export { initializeSlider };
