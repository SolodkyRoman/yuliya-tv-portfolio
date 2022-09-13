import { hidePreloader } from './preloader.js';

const hidePreloaderAfterImageLoad = () => {
  const images = document.getElementsByClassName('project-illustration');

  if (!images.length) {
    hidePreloader();
  }

  let loadedImages = 0;
  for (let i = 0; i < images.length; i++) {
    if (images[i].complete) {
      loadedImages++;
    } else {
      images[i].addEventListener('load', () => {
        loadedImages++;

        if (loadedImages === images.length) hidePreloader();
      });
    }

    if (loadedImages === images.length) hidePreloader();
  }
};

hidePreloaderAfterImageLoad();
