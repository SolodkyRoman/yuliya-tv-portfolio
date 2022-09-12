const loadImages = async (images) => new Promise(res => {
    const loadedImages = [];
    let failedImagesCounter = 0;

    const checkIfLoadingFinished = () => {
        const allImagesProcessed = loadedImages.length + failedImagesCounter === images.length
        if (allImagesProcessed) {
            res(loadedImages);
        }
    }

    images.forEach(src => {
        const image = new Image();
        image.onload = () => {
            loadedImages.push(src);
            checkIfLoadingFinished();
        }
        image.onerror = () => {
            failedImagesCounter++;
            checkIfLoadingFinished();
        }
        image.src = src;
    });
});

export { loadImages };
