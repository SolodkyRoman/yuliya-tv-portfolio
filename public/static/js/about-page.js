const hidePreloaderAfterAnimationLoad = async () => {
  const videoElements = document.getElementsByTagName('video');
  await window.loadVideos(videoElements), window.hidePreloader();
};

hidePreloaderAfterAnimationLoad();
