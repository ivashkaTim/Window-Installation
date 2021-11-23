const slider = (div, num, array, right, left) => {
  const parentBlock = document.getElementById(div);
  const blocksArray = parentBlock.querySelectorAll(array);
  const btnNext = parentBlock.querySelector(right);
  const btnPrev = parentBlock.querySelector(left);

  let screenWide = true;

  let currentBlock = 0;

  const checkScreenWidth = () => {
    if (screen.width > 576) {
      for (let i = 0; i < blocksArray.length; i++) {
        blocksArray[i].classList.add('active');
        if (i >= num - 1) {
          break;
        }
      }
    } else if (screen.width < 576) {
      blocksArray[currentBlock].classList.add('active');
      screenWide = false;
    }
  };

  const changeSlide = () => {
    blocksArray.forEach((block) => {
      if (block.classList.contains('active')) {
        block.classList.remove('active');
      } else if (!block.classList.contains('active')) {
        block.classList.add('active');
      }
    });
  };

  const nextSlide = () => {
    blocksArray[currentBlock].classList.remove('active');
    currentBlock++;
    if (currentBlock >= blocksArray.length) {
      currentBlock = 0;
    }
    blocksArray[currentBlock].classList.add('active');
  };

  const prevSlide = () => {
    blocksArray[currentBlock].classList.remove('active');
    currentBlock--;
    if (currentBlock < 0) {
      currentBlock = blocksArray.length - 1;
    }
    blocksArray[currentBlock].classList.add('active');
  };

  btnNext.addEventListener('click', () => {
    if (screenWide) {
      changeSlide();
    } else {
      nextSlide();
    }
  });
  btnPrev.addEventListener('click', () => {
    if (screenWide) {
      changeSlide();
    } else {
      prevSlide();
    }
  });

  checkScreenWidth();
};

export default slider;
