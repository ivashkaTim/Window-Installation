import timer from './modules/timer';
import calculator from './modules/calculator';
import slider from './modules/slider';
import modalCall from './modules/modalCall';
import servicesModal from './modules/servicesModal';
import documents from './modules/documents';
import smoothScroll from './modules/smoothScroll';
import sendForm from './modules/sendForm';

timer('25 november 2021');
calculator();
slider(
  'benefits',
  3,
  '.benefits__item',
  '.benefits__arrow--right',
  '.benefits__arrow--left'
);
slider(
  'services',
  2,
  '.col-lg-6',
  '.services__arrow--right',
  '.services__arrow--left'
);

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
