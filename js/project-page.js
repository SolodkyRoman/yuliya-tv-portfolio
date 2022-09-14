import { hidePreloader } from './preloader.js';
import { loadImages } from './image-loader.js';

const hidePreloaderAfterImageLoad = async () => {
  const images = [
    ...document.getElementsByClassName('project-illustration'),
  ].map((img) => img.src);

  await loadImages(images);
  hidePreloader();
};

hidePreloaderAfterImageLoad();
