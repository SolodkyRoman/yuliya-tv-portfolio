import { initializeSlider } from './slider.js';
import { IMAGE_CHANGE_INTERVAL_MS, IMAGES_SLIDES  } from './constants.js';

const sliderContainer = document.getElementById('slider');

initializeSlider({
    container: sliderContainer,
    interval: IMAGE_CHANGE_INTERVAL_MS,
    slides: IMAGES_SLIDES,
});
