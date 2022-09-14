import { loadImages } from './utils.js';
import { SLIDER_ITEM_CLASS } from './constants.js';

class Slider {
  constructor({ container, slides, interval }) {
    this.container = container;
    this.slides = slides;
    this.interval = interval;
  }

  start = () => {
    let currentImageIndex = 0;

    const changeActiveImage = () => {
      this.imageNodes[currentImageIndex].classList.add('active');
      this.imageNodes[
        currentImageIndex === 0
          ? this.imageNodes.length - 1
          : currentImageIndex - 1
      ].classList.remove('active');
    };

    setInterval(() => {
      if (currentImageIndex === this.imageNodes.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex++;
      }

      changeActiveImage();
    }, this.interval);
  };

  appendImages = (element, images) => {
    this.imageNodes = images.reduce((accum, src) => {
      const img = document.createElement('img');
      img.classList.add(SLIDER_ITEM_CLASS);
      img.src = src;

      return [...accum, img];
    }, []);
    this.imageNodes[0].classList.add('active');
    element.append(...this.imageNodes);
  };

  initialize = async () => {
    const loadedImages = await loadImages(this.slides);
    this.appendImages(this.container, loadedImages);
  };
}

export { Slider };
