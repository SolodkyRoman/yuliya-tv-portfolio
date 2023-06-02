const IMAGE_CHANGE_INTERVAL_MS = 1300;
const IMAGES_SLIDES = [
  'static/images/slides/limozh.png',
  'static/images/slides/nakleika.png',
  'static/images/slides/interior.png',
  'static/images/slides/peppy.png',
  'static/images/slides/this-is-a-war.png',
  'static/images/slides/malard.png',
  'static/images/slides/greek-posters.png',
  'static/images/slides/utopia-haus.webp',
  'static/images/slides/oksyd.png',
];

const handleProjectsPreviewsLoad = () => {
  const projectsContainer = document.getElementById('projects');
  const images = [...projectsContainer.getElementsByTagName('img')].map(
    (img) => img.src,
  );

  return window.loadImages(images);
};

const handleVideoAnimationsLoad = () => {
  const videoElements = document.getElementsByTagName('video');

  return window.loadVideos(videoElements);
};

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
      img.classList.add('slider-item');
      img.alt = 'Project demo slide';
      img.src = src;

      return [...accum, img];
    }, []);
    this.imageNodes[0].classList.add('active');
    element.append(...this.imageNodes);
  };

  initialize = async () => {
    const loadedImages = await window.loadImages(this.slides);
    this.appendImages(this.container, loadedImages);
  };
}

const showPageWithLoadedImages = async () => {
  const sliderContainer = document.getElementById('slider');
  const slider = new Slider({
    container: sliderContainer,
    interval: IMAGE_CHANGE_INTERVAL_MS,
    slides: IMAGES_SLIDES,
  });

  await Promise.all([
    slider.initialize(),
    handleProjectsPreviewsLoad(),
    handleVideoAnimationsLoad(),
  ]);

  slider.start();
  window.hidePreloader();
};

showPageWithLoadedImages();
