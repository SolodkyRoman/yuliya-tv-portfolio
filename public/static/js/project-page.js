import { loadImages, hidePreloader } from './utils.js';

const hidePreloaderAfterImageLoad = async () => {
  const images = [
    ...document.getElementsByClassName('project-illustration'),
  ].map((img) => img.src);

  await loadImages(images);
  hidePreloader();
};

hidePreloaderAfterImageLoad();
