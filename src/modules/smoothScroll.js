const smoothScroll = () => {
  const body = document.querySelector('body');
  const scrollBtn = document.querySelector('.smooth-scroll');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.style.display = 'block';
    } else if (window.scrollY < 500) {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    body.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  });
};

export default smoothScroll;
