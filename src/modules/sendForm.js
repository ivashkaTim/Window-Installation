import { checkInputsRegExp } from './helpers';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(formId);
  const inputUserName = document.querySelectorAll('.user-name');
  const inputUserPhone = document.querySelectorAll('.user-phone');

  const validate = () => {
    let success = false;
    const inputUserNameForm = form.querySelector('.user-name');
    const inputUserPhoneForm = form.querySelector('.user-phone');

    if (inputUserNameForm.value.length < 2) {
      inputUserNameForm.style.border = '1px solid red';
    }

    if (inputUserPhoneForm.value.length < 6) {
      inputUserPhoneForm.style.border = '1px solid red';
    }

    if (
      inputUserNameForm.value.length > 2 &&
      inputUserPhoneForm.value.length > 6
    ) {
      success = true;
    }

    return success;
  };

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

    if (validate()) {
      sendData(formBody).then((data) => {
        formElements.forEach((input) => {
          input.value = '';
          input.style.border = '1px solid #dfdfdf';
        });
      });
    }
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
