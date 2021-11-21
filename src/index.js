import timer from './modules/timer';
import calculator from './modules/calculator';
import sliderBenefit from './modules/sliderBenefit';
import sliderServices from './modules/sliderServices';
import modalCall from './modules/modalCall';
import servicesModal from './modules/servicesModal';
import documents from './modules/documents';
import smoothScroll from './modules/smoothScroll';
import sendForm from './modules/sendForm';

timer('25 november 2021');
calculator();
sliderBenefit();
sliderServices();
modalCall();
servicesModal();
documents();
smoothScroll();
sendForm({
  formId: '.action-form',
  someElem: [
    {
      type: 'input',
      id: 'calc-total',
    },
  ],
});
sendForm({
  formId: '.action-form2',
  someElem: [
    {
      type: 'input',
      id: 'calc-total',
    },
  ],
});
