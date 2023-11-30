function renderAddCardPage() {
  if (event) {
    event.preventDefault();
  }

  clearPage();

  const formCard = document.createElement('form');
  
  const labelNameCard = document.createElement('label');
  const enterNameCard = document.createElement('input');
  const wrapperNameCard = document.createElement('div');
  
  const labelNumberCard = document.createElement('label');
  const enterNumberCard = document.createElement('input');
  const wrapperNumberCard = document.createElement('div');
  const wrapperNumberCardCase = document.createElement('div');
  const numberCardIconCase = document.createElement('div');
  const numberCardIcon = document.createElement('i');
  
  const wrapperValidityPeriodCvv = document.createElement('div');
  const labelValidityPeriod = document.createElement('label');
  const enterValidityPeriod = document.createElement('input');
  const wrapperValidityPeriod = document.createElement('div');
  
  const labelCvvCard = document.createElement('label');
  const enterCvvCard = document.createElement('input');
  const wrapperCvvCard = document.createElement('div');
  
  
  const labelCardHolder = document.createElement('label');
  const enterCardHolder = document.createElement('input');
  const wrapperCardHolder = document.createElement('div');

  const labelCardPin = document.createElement('label');
  const enterCardPin = document.createElement('input');
  const wrapperCardPin = document.createElement('div');
  const wrapperPinCase = document.createElement('div');
  const pinIconCase = document.createElement('div');
  const pinIcon = document.createElement('i');

  const labelCardNote = document.createElement('label');
  const enterCardNote = document.createElement('input');
  const wrapperCardNote = document.createElement('div');
 
  const textBack= document.createElement('div');


  enterNameCard.setAttribute('placeholder', 'Название');
  enterNumberCard.setAttribute('placeholder', 'Номер карты');
  enterValidityPeriod.setAttribute('placeholder', 'Срок (ММ/ГГ)');
  enterCvvCard.setAttribute('placeholder', 'CVV-код');
  enterCardHolder.setAttribute('placeholder', 'Владелец');
  enterCardPin.setAttribute('placeholder', 'ПИН-код');
  enterCardNote.setAttribute('placeholder', 'Комментарий');


  const wrapperButtonCard = document.createElement('div');
  const buttonCreateCard = document.createElement('button');
  const buttonCancelCard = document.createElement('button');
  buttonCreateCard.textContent = 'Создать';
  buttonCancelCard.textContent = 'Отмена';

  formCard.classList.add('form');
  formCard.dataset.type = 'card';

  buttonCancelCard.classList.add('button', 'cancel-button');
  buttonCreateCard.classList.add('button', 'create-button');


  labelNameCard.classList.add('label-password');
  labelNumberCard.classList.add('label-password')
  labelValidityPeriod.classList.add('label-password');
  labelCvvCard.classList.add('label-password');
  labelCardHolder.classList.add('label-password');
  labelCardPin.classList.add('label-password');
  labelCardNote.classList.add('label-password');

  textBack.classList.add('text-back');
  textBack.textContent = 'CARD';


  enterNumberCard.setAttribute('type', 'text');
  enterNumberCard.setAttribute('maxlength', '16');

  enterValidityPeriod.setAttribute('type', 'text');
  enterValidityPeriod.setAttribute('maxlength', '4');

  enterCvvCard.setAttribute('type', 'password');
  enterCvvCard.setAttribute('maxlength', '3');

  wrapperNameCard.classList.add('wrapper-name-card-add', 'input-card-wrapper');
  wrapperNumberCard.classList.add('wrapper-number-card-add');
  wrapperValidityPeriod.classList.add('wrapper-validity-period-add');
  wrapperCvvCard.classList.add('wrapper-cvv-card-add');
  wrapperCardHolder.classList.add('wrapper-card-holder-add');
  wrapperCardPin.classList.add('wrapper-card-pin-add');
  wrapperCardNote.classList.add('wrapper-card-note-add');

  enterNameCard.classList.add('enter');
  enterNameCard.dataset.type = 'name';
  
  enterNumberCard.classList.add('enter', 'input-card');
  enterNumberCard.dataset.type = 'card number';
  enterValidityPeriod.classList.add('enter-card','enter-validity-period');
  enterValidityPeriod.dataset.type = 'valid date';
  enterCvvCard.classList.add('enter-card','enter-cvv-period');
  enterCvvCard.dataset.type = 'cvv';
  enterCardHolder.classList.add('enter');
  enterCardHolder.dataset.type = 'cardholder';
  enterCardPin.classList.add('enter');
  enterCardPin.dataset.type = 'pin';
  enterCardNote.classList.add('enter');
  enterCardNote.dataset.type = 'note';

  wrapperNameCard.classList.add('wrapperenter');
  wrapperNumberCard.classList.add('wrapperenter');
  wrapperNumberCardCase.classList.add('wrapper-case');
  wrapperValidityPeriod.classList.add('wrapperenter-validity-period', 'wrapperenter');
  wrapperCvvCard.classList.add('wrapperenter');
  wrapperValidityPeriodCvv.classList.add('wrapper-validity-period-cvv')
  wrapperCardHolder.classList.add('wrapperenter');
  wrapperCardPin.classList.add('wrapperenter');
  wrapperPinCase.classList.add('wrapper-case');
  wrapperCardNote.classList.add('wrapperenter');
  wrapperButtonCard.classList.add('wrapperbutton');
  
  pinIconCase.classList.add('urlIconCase');
  pinIcon.classList.add('passwordIcon', 'fa-solid', 'fa-eye-slash');

  numberCardIconCase.classList.add('urlIconCase');
  numberCardIcon.classList.add('passwordIcon', 'fa-solid', 'fa-eye-slash');

  labelNameCard.textContent = ' ';
  labelNumberCard.textContent = ' ';
  labelValidityPeriod.textContent = ' ';
  labelCvvCard.textContent = ' ';
  labelCardHolder.textContent = ' ';
  labelCardPin.textContent = ' ';
  labelCardNote.textContent = ' ';

  mainPage.appendChild(formCard);

  formCard.appendChild(wrapperNameCard);
  wrapperNameCard.appendChild(labelNameCard);
  wrapperNameCard.appendChild(enterNameCard);

  formCard.appendChild(wrapperNumberCard);
  wrapperNumberCard.appendChild(labelNumberCard);
  wrapperNumberCard.appendChild(wrapperNumberCardCase);
  wrapperNumberCardCase.appendChild(enterNumberCard);
  wrapperNumberCardCase.appendChild(numberCardIconCase);
  numberCardIconCase.appendChild(numberCardIcon);

  formCard.appendChild(wrapperValidityPeriodCvv);
  wrapperValidityPeriodCvv.appendChild(wrapperValidityPeriod);
  wrapperValidityPeriod.appendChild(labelValidityPeriod);
  wrapperValidityPeriod.appendChild(enterValidityPeriod);
  wrapperValidityPeriodCvv.appendChild(wrapperCvvCard);
  wrapperCvvCard.appendChild(labelCvvCard);
  wrapperCvvCard.appendChild(enterCvvCard);
  

  formCard.appendChild(wrapperCardHolder);
  wrapperCardHolder.appendChild(labelCardHolder);
  wrapperCardHolder.appendChild(enterCardHolder);

  formCard.appendChild(wrapperCardHolder);
  wrapperCardHolder.appendChild(labelCardHolder);
  wrapperCardHolder.appendChild(enterCardHolder);

  formCard.appendChild(wrapperCardPin);
  wrapperCardPin.appendChild(labelCardPin);
  wrapperCardPin.appendChild(wrapperPinCase);
  wrapperPinCase.appendChild(enterCardPin);
  wrapperPinCase.appendChild(pinIconCase);
  pinIconCase.appendChild(pinIcon);

  formCard.appendChild(wrapperCardNote);
  wrapperCardNote.appendChild(labelCardNote);
  wrapperCardNote.appendChild(enterCardNote);

  formCard.appendChild(wrapperButtonCard);
  wrapperButtonCard.appendChild(textBack)
  wrapperButtonCard.appendChild(buttonCreateCard);
  wrapperButtonCard.appendChild(buttonCancelCard);


  function hidePlaceHolder({ target }) {
    const label = target.closest('.wrapperenter').querySelector('.label-password');
    if (target.value !== '') {
      label.textContent = target.placeholder;
    } else {
      label.textContent = ' ';
    }
  }

  enterNameCard.addEventListener('input', hidePlaceHolder);
  enterNumberCard.addEventListener('input', hidePlaceHolder);
  enterValidityPeriod.addEventListener('input', hidePlaceHolder);
  enterCvvCard.addEventListener('input', hidePlaceHolder);
  enterCardHolder.addEventListener('input', hidePlaceHolder);
  enterCardPin.addEventListener('input', hidePlaceHolder);
  enterCardNote.addEventListener('input', hidePlaceHolder);

  
  pinIconCase.addEventListener('click', showHidePassword);
  numberCardIconCase.addEventListener('click', showHidePassword);

  buttonCancelCard.addEventListener('click', cancelRenderCreateSecurityPassword);
  buttonCreateCard.addEventListener('click', function () {
    formSubmit();
    writeUserDataStorage(userDataStorage);
    clearPage();
    renderUserDataPage();
    renderAddButton();
  });
}

