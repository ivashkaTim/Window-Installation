import { checkInputsRegExp } from './helpers';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(formId);
  const inputUserName = document.querySelectorAll('.user-name');
  const inputUserPhone = document.querySelectorAll('.user-phone');

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    try {
      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);

        if (elem.type === 'block') {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      });
    } catch (error) {}

    sendData(formBody).then((data) => {
      formElements.forEach((input) => {
        input.value = '';
      });
    });
  };

  try {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {}

  checkInputsRegExp(inputUserPhone, /[^\+0-9]$/g);
  checkInputsRegExp(inputUserName, /[^a-zA-Zа-яА-яёЁ\s]+$/g);
};

export default sendForm;
