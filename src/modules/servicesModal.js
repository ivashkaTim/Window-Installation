import { animate } from './helpers';

const servicesModal = () => {
  const serviceBtn = document.querySelectorAll('.service-button');
  const serviceModal = document.querySelector('.services-modal ');
  const overlay = document.querySelector('.overlay');
  const closeModalBtn = document.querySelector('.services-modal__close');

  serviceBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      serviceModal.style.opacity = '0';
      serviceModal.style.display = 'block';

      overlay.style.opacity = '0';
      overlay.style.display = 'block';

      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          serviceModal.style.opacity = progress * 1;
          overlay.style.opacity = progress * 1;
        },
      });
    });
  });

  closeModalBtn.addEventListener('click', () => {
    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
  });
};

export default servicesModal;
