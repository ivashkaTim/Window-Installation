import { animate } from './helpers';

const modalCall = () => {
  const btnCall = document.querySelector('.btn-call');
  const modalCall = document.querySelector('.header-modal--opened');
  const overlay = document.querySelector('.overlay');

  btnCall.addEventListener('click', (e) => {
    e.preventDefault();

    modalCall.style.opacity = '0';
    modalCall.style.display = 'block';

    overlay.style.opacity = '0';
    overlay.style.display = 'block';

    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalCall.style.opacity = progress * 1;
        overlay.style.opacity = progress * 1;
      },
    });
  });

  modalCall.addEventListener('click', (e) => {
    console.log(!e.target.closest('.fancybox-skin'));
    if (e.target.closest('.header-modal__close')) {
      overlay.style.display = 'none';
      modalCall.style.display = 'none';
    }
  });
};

export default modalCall;
