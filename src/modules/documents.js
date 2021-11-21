import { animate } from './helpers';

const documents = () => {
  const imgOverlay = document.createElement('div');
  const documents = document.querySelector('#documents');
  const bigImage = document.createElement('img');

  imgOverlay.classList.add('overlay');
  documents.appendChild(imgOverlay);

  imgOverlay.style.justifyContent = 'center';
  imgOverlay.style.alignItems = 'center';
  imgOverlay.style.zIndex = 10;
  imgOverlay.style.display = 'none';
  bigImage.style.maxHeight = '80%';

  imgOverlay.appendChild(bigImage);

  documents.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('document-overlay')) {
      imgOverlay.style.display = 'flex';
      imgOverlay.style.opacity = '0';
      const path = e.target.parentNode.getAttribute('href');

      bigImage.setAttribute('src', path);
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          imgOverlay.style.opacity = progress * 1;
        },
      });
    }

    if (e.target.matches('div.overlay')) {
      imgOverlay.style.display = 'none';
    }
  });
};

export default documents;
