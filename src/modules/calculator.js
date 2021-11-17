import { animate } from './helpers';

const calculator = () => {
  const calcContainer = document.querySelector('.balkony #calc');
  const calcType = document.getElementById('calc-type');
  const calcMaterial = document.getElementById('calc-type-material');
  const calcSquare = document.getElementById('calc-input');
  const total = document.getElementById('calc-total');

  const coutCall = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcMaterialValue =
      +calcMaterial.options[calcMaterial.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;

    if (calcTypeValue && calcMaterialValue && calcSquareValue) {
      totalValue = calcTypeValue * calcMaterialValue * calcSquareValue;
    }

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.value = Math.round(progress * totalValue);
      },
    });
  };
  calcContainer.addEventListener('change', (e) => {
    if (
      e.target === calcType ||
      e.target === calcMaterial ||
      e.target === calcSquare
    ) {
      coutCall();
    }
  });
};

export default calculator;
