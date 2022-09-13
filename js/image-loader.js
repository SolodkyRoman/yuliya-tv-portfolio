const loadImages = async (images) =>
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

export { loadImages };
