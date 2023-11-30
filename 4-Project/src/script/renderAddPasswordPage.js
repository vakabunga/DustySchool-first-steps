function renderAddPasswordPage() {
  if (event) {
    event.preventDefault();
  }

  clearPage();

  const form = document.createElement('form');
  const labelName = document.createElement('label');
  const enterName = document.createElement('input');
  const wrapperName = document.createElement('div');
  const labelPassword = document.createElement('label');
  const enterPassword = document.createElement('input');
  const wrapperPassword = document.createElement('div');
  const labelLogin = document.createElement('label');
  const enterLogin = document.createElement('input');
  const wrapperLogin = document.createElement('div');
  const wrapperUrl = document.createElement('div');
  const labelUrl = document.createElement('label');
  const wrapperUrlCase = document.createElement('div');
  const wrapperPasswordCase = document.createElement('div');
  const enterUrl = document.createElement('input');
  const textBack = document.createElement('div');
  const urlIconCase = document.createElement('div');
  const urlIcon = document.createElement('i');
  const link = document.createElement('a');
  const passwordIconCase = document.createElement('div');
  const passwordIcon = document.createElement('i');
  const labelNote = document.createElement('label');
  const enterNote = document.createElement('input');
  const wrapperNote = document.createElement('div');

  enterName.setAttribute('placeholder', 'Название');
  enterPassword.setAttribute('placeholder', 'Пароль');
  enterLogin.setAttribute('placeholder', 'Логин');
  enterUrl.setAttribute('placeholder', 'URL-адрес');
  enterNote.setAttribute('placeholder', 'Заметка');
  link.target = '_blank';
  link.classList.add('link-for-icon');

  const wrapperButtonPassword = document.createElement('div');
  const buttonCreatePassword = document.createElement('button');
  const buttonCancelPassword = document.createElement('button');
  buttonCreatePassword.textContent = 'Создать';
  buttonCancelPassword.textContent = 'Отмена';

  form.classList.add('form');
  form.dataset.type = 'password';

  buttonCancelPassword.classList.add('button', 'cancel-button');
  buttonCreatePassword.classList.add('button', 'create-button');

  labelName.classList.add('label-password');
  labelPassword.classList.add('label-password')
  labelLogin.classList.add('label-password');
  labelUrl.classList.add('label-password');
  labelNote.classList.add('label-password');

  textBack.classList.add('text-back');
  textBack.textContent = 'PASSWORD';

  enterPassword.setAttribute('type', 'password');
  enterPassword.setAttribute('minlength', '2');
  enterPassword.setAttribute('maxlength', '20');

  wrapperPassword.classList.add('wrapperPassword-add', 'input-password-wrapper');
  wrapperLogin.classList.add('wrapperLogin-add');
  wrapperUrl.classList.add('wrapperUrl-add');
  wrapperNote.classList.add('wrapperNote-add');

  enterName.classList.add('enter');
  enterName.dataset.type = 'name';
  enterPassword.classList.add('enter', 'input-password');
  enterPassword.dataset.type = 'password';
  enterLogin.classList.add('enter');
  enterLogin.dataset.type = 'login';
  enterUrl.classList.add('enter');
  enterUrl.dataset.type = 'url';
  enterNote.classList.add('enter');
  enterNote.dataset.type = 'note';

  wrapperName.classList.add('wrapperenter');
  wrapperPassword.classList.add('wrapperenter');
  wrapperLogin.classList.add('wrapperenter');
  wrapperUrl.classList.add('wrapperenter');
  wrapperButtonPassword.classList.add('wrapperbutton');
  wrapperUrlCase.classList.add('wrapperUrlCase');
  wrapperPasswordCase.classList.add('wrapperUrlCase');
  wrapperNote.classList.add('wrapperenter');

  urlIconCase.classList.add('urlIconCase');
  urlIcon.classList.add('urlIcon', 'fa-solid', 'fa-globe');

  passwordIconCase.classList.add('urlIconCase');
  passwordIcon.classList.add('passwordIcon', 'fa-solid', 'fa-eye-slash');

  labelName.textContent = ' ';
  labelPassword.textContent = ' ';
  labelLogin.textContent = ' ';
  labelUrl.textContent = ' ';
  labelNote.textContent = ' ';

  mainPage.appendChild(form);

  form.appendChild(wrapperName);
  wrapperName.appendChild(labelName);
  wrapperName.appendChild(enterName);

  form.appendChild(wrapperPassword);
  wrapperPassword.appendChild(labelPassword);
  wrapperPassword.appendChild(wrapperPasswordCase);
  wrapperPasswordCase.appendChild(enterPassword);

  form.appendChild(wrapperLogin);
  wrapperLogin.appendChild(labelLogin); 
  wrapperLogin.appendChild(enterLogin);

  form.appendChild(wrapperUrl);
  wrapperUrl.appendChild(labelUrl);
  wrapperUrl.appendChild(wrapperUrlCase);
  wrapperUrlCase.appendChild(enterUrl);
  wrapperUrlCase.appendChild(urlIconCase);
  wrapperPasswordCase.appendChild(passwordIconCase);
  urlIconCase.appendChild(link);
  link.appendChild(urlIcon);
  passwordIconCase.appendChild(passwordIcon);

  form.appendChild(wrapperNote);
  wrapperNote.appendChild(labelNote);
  wrapperNote.appendChild(enterNote);

  form.appendChild(wrapperButtonPassword);
  wrapperButtonPassword.appendChild(textBack)
  wrapperButtonPassword.appendChild(buttonCreatePassword);
  wrapperButtonPassword.appendChild(buttonCancelPassword);


  function hidePlaceHolder({ target }) {
    const label = target.closest('.wrapperenter').querySelector('.label-password');
    if (target.value !== '') {
      label.textContent = target.placeholder;
    } else {
      label.textContent = ' ';
    }
  } 

  enterName.addEventListener('input', hidePlaceHolder);
  enterPassword.addEventListener('input', hidePlaceHolder);
  enterLogin.addEventListener('input', hidePlaceHolder);
  enterUrl.addEventListener('input', hidePlaceHolder);
  enterNote.addEventListener('input', hidePlaceHolder);

  enterPassword.addEventListener('input', restrictCyrylic);

  passwordIconCase.addEventListener('click', showHidePassword);

  buttonCancelPassword.addEventListener('click', function() {
    cancelRenderCreateSecurityPassword();
    pageTitle.textContent = 'Все записи';
  });

  buttonCreatePassword.addEventListener('click', formSubmit);
}