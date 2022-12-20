const hidePreloaderAfterImageLoad = async () => {
  const images = [
    ...document.getElementsByClassName('project-illustration'),
  ].map((img) => img.src);
  const videoElements = document.getElementsByTagName('video');

  await Promise.all([
    window.loadImages(images),
    window.loadVideos(videoElements),
  ]);

  window.hidePreloader();
};

hidePreloaderAfterImageLoad();

const startStickerAnimationOnScroll = () => {
  const stickersGif = document.getElementById('stickers-gif');
  if (!stickersGif) return;

  stickersGif.style.opacity = 0;

  window.handleAppearanceInViewport(stickersGif, () => {
    // eslint-disable-next-line no-self-assign
    stickersGif.src = stickersGif.src;
    stickersGif.style.opacity = 1;
  });
};
startStickerAnimationOnScroll();
