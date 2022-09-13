import { Slider } from './slider.js';
import { IMAGE_CHANGE_INTERVAL_MS, IMAGES_SLIDES } from './constants.js';
import { loadImages } from './image-loader.js';
import { hidePreloader } from './preloader.js';

const handleProjectsPreviewsLoad = () => {
  const projectsContainer = document.getElementById('projects');
  const images = [...projectsContainer.getElementsByTagName('img')].map(
    (img) => img.src,
  );

  return loadImages(images);
};

const showPageWithLoadedImages = async () => {
  const sliderContainer = document.getElementById('slider');
  const slider = new Slider({
    container: sliderContainer,
    interval: IMAGE_CHANGE_INTERVAL_MS,
    slides: IMAGES_SLIDES,
  });

  await Promise.all([slider.initialize(), handleProjectsPreviewsLoad()]);

  slider.start();
  hidePreloader();
};

showPageWithLoadedImages();
