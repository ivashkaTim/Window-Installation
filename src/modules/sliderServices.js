const sliderServices = () => {
  const services = document.getElementById('services');
  const serviceBlocks = services.querySelectorAll('.col-lg-6');
  const btnNext = services.querySelector('.services__arrow--right');
  const btnPrev = services.querySelector('.services__arrow--left');

  let currentBlock = 0;

  const checkScreenWidth = () => {
    if (screen.width > 576) {
      serviceBlocks[currentBlock].classList.add('active');
      serviceBlocks[currentBlock + 1].classList.add('active');
    } else if (screen.width < 576) {
      serviceBlocks[currentBlock].classList.add('active');
    }
  };

  const nextSlide = () => {
    serviceBlocks[currentBlock].classList.remove('active');
    if (screen.width > 576) {
      serviceBlocks[currentBlock + 1].classList.remove('active');
    }
    currentBlock++;
    if (screen.width > 576) {
      currentBlock++;
    }

    if (currentBlock >= serviceBlocks.length) {
      currentBlock = 0;
    }
    serviceBlocks[currentBlock].classList.add('active');
    if (screen.width > 576) {
      serviceBlocks[currentBlock + 1].classList.add('active');
    }
  };

  const prevSlide = () => {
    serviceBlocks[currentBlock].classList.remove('active');
    if (screen.width > 576) {
      serviceBlocks[currentBlock + 1].classList.remove('active');
    }
    currentBlock--;

    if (currentBlock < 0) {
      currentBlock = serviceBlocks.length - 1;
    }
    serviceBlocks[currentBlock].classList.add('active');

    if (screen.width > 576) {
      currentBlock--;

      if (currentBlock < 0) {
        currentBlock = serviceBlocks.length - 1;
      }
      serviceBlocks[currentBlock].classList.add('active');
    }
  };

  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);

  checkScreenWidth();
};

export default sliderServices;
