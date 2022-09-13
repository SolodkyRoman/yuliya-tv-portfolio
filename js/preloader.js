const showPreloader = () => {
  document.body.classList.add('block-scroll');
  document.getElementById('preloader').classList.add('active');
};

const hidePreloader = () => {
  document.body.classList.remove('block-scroll');
  document.getElementById('preloader').classList.remove('active');
};

export { showPreloader, hidePreloader };
