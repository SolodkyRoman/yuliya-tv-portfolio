var handleAppearanceInViewport = (element, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        callback();
        observer.disconnect();
      }
    },
    { threshold: 0.33 },
  );
  observer.observe(element);
};

var loadImages = async (images) =>
  new Promise((res) => {
    const loadedImages = [];
    let loadedImagesCounter = 0;
    let failedImagesCounter = 0;

    const checkIfLoadingFinished = () => {
      const allImagesProcessed =
        loadedImagesCounter + failedImagesCounter === images.length;

      if (allImagesProcessed) {
        res(loadedImages);
      }
    };

    images.forEach((src, index) => {
      const image = new Image();
      image.onload = () => {
        loadedImages[index] = src;
        loadedImagesCounter++;
        checkIfLoadingFinished();
      };
      image.onerror = () => {
        failedImagesCounter++;
        checkIfLoadingFinished();
      };
      image.src = src;
    });
  });

var loadVideos = async (videoElements) =>
  new Promise((res) => {
    if (videoElements.length === 0) {
      res();
    }

    let processedVideosNumber = 0;

    const processVideo = (videoElement) => {
      videoElement.oncanplaythrough = undefined;
      processedVideosNumber++;

      if (processedVideosNumber === videoElements.length) {
        res();
      }
    };

    [...videoElements].forEach((videoElement) => {
      if (videoElement.readyState === 4) {
        return processVideo(videoElement);
      }

      videoElement.addEventListener('canplaythrough', () => {
        processVideo(videoElement);
      });

      videoElement.addEventListener(
        'error',
        () => {
          processVideo(videoElement);
        },
        true,
      );
    });
  });

var showPreloader = () => {
  document.body.classList.add('block-scroll');
  document.getElementById('preloader').classList.add('active');
};

var hidePreloader = () => {
  document.body.classList.remove('block-scroll');
  document.getElementById('preloader').classList.remove('active');
};

var isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  ) ||
  (window.outerWidth < 1024 && window.outerWidth !== 0);
