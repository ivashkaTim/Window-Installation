const smoothScroll = () => {
  const body = document.querySelector('body');
  const scrollBtn = document.querySelector('.smooth-scroll');
  const blockBenefits = document.getElementById('benefits');

  const elemRect = blockBenefits.getBoundingClientRect();
  scrollBtn.style.opacity = '0';

  document.addEventListener('scroll', () => {
    if (window.scrollY > elemRect.y) {
      scrollBtn.style.display = 'block';
      scrollBtn.style.opacity = '1';
    } else {
      scrollBtn.style.display = 'none';
      scrollBtn.style.opacity = '0';
    }
  });

  scrollBtn.addEventListener('click', () => {
    body.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  });
};

export default smoothScroll;
