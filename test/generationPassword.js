function generationPassword() {
  if (event) {
    event.preventDefault();
  }

  const tittlePasswordModal = document.createElement('h1');

  const mainPage = document.querySelector('main');

  tittlePasswordModal.classList.add('modal__title');
  tittlePasswordModal.classList.add('tittle-add');
  const form = document.createElement('form');
  const copyImage = document.createElement('img');
  const labelEnterLength = document.createElement('label');
  const enterEnterLength = document.createElement('input');
  const wrapperEnterLength = document.createElement('div');
  const labelEnterRange = document.createElement('label');
  const rangeText = document.createElement('span');
  rangeText.textContent = '15';
  const enterRange = document.createElement('input');
  const wrapperEnterRange = document.createElement('div');
  const labelLower = document.createElement('label');
  const enterLower = document.createElement('input');
  const wrapperLower = document.createElement('div');
  const labelUpper = document.createElement('label');
  const enterUpper = document.createElement('input');
  const wrapperUpper = document.createElement('div');
  const wrapperNumbers = document.createElement('div');
  const labelNumbers = document.createElement('label');
  const enterNumbers = document.createElement('input');
  const wrapperSymbols = document.createElement('div');
  const labelSymbols = document.createElement('label');
  const enterSymbols = document.createElement('input');
  const textLower = document.createElement('p');
  const textUpper = document.createElement('p');
  const textNumbers = document.createElement('p');
  const textSymbols = document.createElement('p');
  tittlePasswordModal.textContent = 'Генератор пароля';
  textLower.textContent = 'Строчные буквы';
  textUpper.textContent = 'Заглавные буквы';
  textNumbers.textContent = 'Цифры';
  textSymbols.textContent = 'Специальные символы';
  labelEnterRange.textContent = 'Длина пароля';
  const wrapperButtonGeneration = document.createElement('div');
  const buttonGenerationPassword = document.createElement('button');
  const buttonCancelPassword = document.createElement('button');
  buttonGenerationPassword.textContent = 'Сгенерировать';
  buttonCancelPassword.textContent = 'Отмена';


  form.classList.add('form');
  buttonCancelPassword.classList.add('button', 'button-password');
  buttonGenerationPassword.classList.add('button', 'button-password', 'button-generation');
  labelUpper.classList.add('label-password');
  labelLower.classList.add('label-password');
  labelNumbers.classList.add('label-password');
  labelSymbols.classList.add('label-password');

  enterUpper.setAttribute('type', 'checkbox');
  enterUpper.checked = true;
  enterLower.setAttribute('type', 'checkbox');
  enterLower.checked = true;
  enterNumbers.setAttribute('type', 'checkbox');
  enterNumbers.checked = true;
  enterSymbols.setAttribute('type', 'checkbox');

  enterRange.setAttribute('type', 'range');
  enterRange.setAttribute('min', '1');
  enterRange.setAttribute('max', '30');
  enterRange.setAttribute('value', '15');
  enterRange.setAttribute('step', '1');

  enterUpper.classList.add('form-checkbox-agree', 'check-box_position', 'enter');
  enterLower.classList.add('form-checkbox-agree', 'check-box_position', 'enter');
  enterNumbers.classList.add('form-checkbox-agree', 'check-box_position', 'enter');
  enterSymbols.classList.add('form-checkbox-agree', 'check-box_position', 'enter');
  rangeText.classList.add('range-text');
  copyImage.classList.add('copy-image');

  enterUpper.classList.add('form-checkbox-agree', 'check-box_position');
  enterLower.classList.add('form-checkbox-agree', 'check-box_position');
  enterNumbers.classList.add('form-checkbox-agree', 'check-box_position');
  enterSymbols.classList.add('form-checkbox-agree', 'check-box_position');
  enterEnterLength.classList.add('enter-generation');
  enterEnterLength.classList.add('enter');

  textUpper.classList.add('check-box-text', 'check-box-text_position');
  textLower.classList.add('check-box-text', 'check-box-text_position');
  textNumbers.classList.add('check-box-text', 'check-box-text_position');
  textSymbols.classList.add('check-box-text', 'check-box-text_position');

  wrapperEnterLength.classList.add('wrapperenter');
  wrapperLower.classList.add('check-box-wrapper');
  wrapperUpper.classList.add('check-box-wrapper');
  wrapperNumbers.classList.add('check-box-wrapper');
  wrapperSymbols.classList.add('check-box-wrapper');
  wrapperButtonGeneration.classList.add('wrapperbutton');
  wrapperEnterRange.classList.add('wrapper-range', 'check-box-wrapper');


  mainPage.appendChild(form);

  form.appendChild(tittlePasswordModal);
  form.appendChild(wrapperEnterLength);
  wrapperEnterLength.appendChild(labelEnterLength);
  wrapperEnterLength.appendChild(enterEnterLength);
  wrapperEnterLength.appendChild(copyImage);

  form.appendChild(wrapperEnterRange);
  wrapperEnterRange.appendChild(labelEnterRange);

  wrapperEnterRange.appendChild(enterRange);
  labelEnterRange.appendChild(rangeText);

  form.appendChild(wrapperLower);
  wrapperLower.appendChild(labelLower);
  wrapperLower.appendChild(enterLower);
  wrapperLower.appendChild(textLower);

  form.appendChild(wrapperUpper);
  wrapperUpper.appendChild(labelUpper);
  wrapperUpper.appendChild(enterUpper);
  wrapperUpper.appendChild(textUpper);

  form.appendChild(wrapperNumbers);
  wrapperNumbers.appendChild(labelNumbers);
  wrapperNumbers.appendChild(enterNumbers);
  wrapperNumbers.appendChild(textNumbers);

  form.appendChild(wrapperSymbols);
  wrapperSymbols.appendChild(labelSymbols);
  wrapperSymbols.appendChild(enterSymbols);
  wrapperSymbols.appendChild(textSymbols);

  form.appendChild(wrapperButtonGeneration);
  wrapperButtonGeneration.appendChild(buttonGenerationPassword);
  wrapperButtonGeneration.appendChild(buttonCancelPassword);

  let passwordLength;
  enterRange.addEventListener('input', function () {
    event.preventDefault();
    passwordLength = enterRange.value;
    rangeText.textContent = passwordLength;
  });
  copyImage.addEventListener('click', function () {
    enterEnterLength.select();
    document.execCommand('copy');
  });
  function generationPasswordAdd(passwordLength) {
    event.preventDefault();
    passwordLength = enterRange.value;

    const arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrLetterslower = [
      'a',
      'e',
      'i',
      'o',
      'u',
      'y',
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'z',
    ];
    const arrLettersUpper = [
      'A',
      'E',
      'I',
      'O',
      'U',
      'Y',
      'B',
      'C',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'M',
      'N',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'V',
      'W',
      'X',
      'Z',
    ];
    const arrSymbols = ['(', ')', '+', '*', '%', '$', '#', '@', '!'];

    let allRandom = [];

    if (enterLower.checked) {
      allRandom = allRandom.concat(arrLetterslower);
    }

    if (enterUpper.checked) {
      allRandom = allRandom.concat(arrLettersUpper);
    }

    if (enterNumbers.checked) {
      allRandom = allRandom.concat(arrNumber);
    }

    if (enterSymbols.checked) {
      allRandom = allRandom.concat(arrSymbols);
    }

    let randomPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * allRandom.length);
      randomPassword += allRandom[randomNumber];
    }

    enterEnterLength.value = randomPassword;
    return enterEnterLength.value;
  }
  buttonGenerationPassword.addEventListener('click', generationPasswordAdd);

  buttonCancelPassword.addEventListener('click', function () {
  })
}

generationPassword();