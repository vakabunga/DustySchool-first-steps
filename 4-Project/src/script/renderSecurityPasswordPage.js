function renderSecurityPasswordPage() {
    event.preventDefault();
    clearPage();
    const formWrapper = document.createElement('div')
    formWrapper.classList.add('start-page__wrapper', 'overhanging-window', 'overhanging-window_paddings');

    const form = document.createElement('form');
    form.classList.add('security-password-create-page-form');

    const tittlePasswordModal = document.createElement('h1');
    tittlePasswordModal.classList.add('start-page__sub-header', 'start-page__header_weight', 'security-password-page__header_position');
    tittlePasswordModal.textContent = 'Установите пароль';

    const enterPasswordWrapper = document.createElement('div');
    enterPasswordWrapper.classList.add('input-security-password-wrapper', 'input-password-wrapper');

    const reEnterPasswordWrapper = document.createElement('div');
    reEnterPasswordWrapper.classList.add('input-security-password-wrapper', 'input-password-wrapper');

    const checkBoxWrapper = document.createElement('div');
    checkBoxWrapper.classList.add('check-box-wrapper');

    const enterPassword = document.createElement('input');
    enterPassword.setAttribute('type', 'password');
    enterPassword.setAttribute('minlength', '2');
    enterPassword.setAttribute('maxlength', '20');
    enterPassword.classList.add('input', 'input-password');

    const reEnterPassword = document.createElement('input');
    reEnterPassword.setAttribute('type', 'password');
    reEnterPassword.setAttribute('minlength', '2');
    reEnterPassword.setAttribute('maxlength', '20');
    reEnterPassword.classList.add('input', 'input-password');

    const statusMessage = document.createElement('p');
    statusMessage.classList.add('status-message', 'status-message-position');
    statusMessage.textContent = ' ';

    const checkStatusMessage = document.createElement('p');
    checkStatusMessage.classList.add('status-message', 'status-message-position');
    checkStatusMessage.textContent = ' ';

    const firstInputEye = document.createElement('i');
    firstInputEye.classList.add('fa-regular', 'fa-eye-slash');

    const secondInputEye = document.createElement('i');
    secondInputEye.classList.add('fa-regular', 'fa-eye-slash');

    const notUsePasswordCheckBox = document.createElement('input');
    notUsePasswordCheckBox.type = 'checkbox';
    notUsePasswordCheckBox.classList.add('form-checkbox-agree', 'check-box_position');

    const checkBoxText = document.createElement('p');
    checkBoxText.classList.add('check-box-text', 'check-box-text_position');
    checkBoxText.textContent = 'Не использовать пароль для входа (можно позже задать в настройках)';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');

    const createPasswordButton = document.createElement('button');
    createPasswordButton.textContent = 'Продолжить';
    createPasswordButton.classList.add('button', 'button_width_max', 'button_position', 'button_create_security_password', 'button_inactive');
    createPasswordButton.disabled = true;

    const statusCreatePassword = document.createElement('p');
    statusCreatePassword.classList.add('status-message', 'status-message-position', 'status-message-create-password');
    statusCreatePassword.textContent = ' ';

    mainPage.appendChild(formWrapper);
    formWrapper.appendChild(tittlePasswordModal)
    formWrapper.appendChild(form);
    form.appendChild(enterPasswordWrapper);
    enterPasswordWrapper.appendChild(enterPassword);
    enterPasswordWrapper.appendChild(firstInputEye);
    enterPasswordWrapper.appendChild(statusMessage);
    form.appendChild(reEnterPasswordWrapper);
    reEnterPasswordWrapper.appendChild(reEnterPassword);
    reEnterPasswordWrapper.appendChild(secondInputEye);
    reEnterPasswordWrapper.appendChild(checkStatusMessage);
    form.appendChild(checkBoxWrapper);
    checkBoxWrapper.appendChild(notUsePasswordCheckBox);
    checkBoxWrapper.appendChild(checkBoxText);
    form.appendChild(buttonWrapper);
    buttonWrapper.appendChild(createPasswordButton);
    buttonWrapper.appendChild(statusCreatePassword);

    firstInputEye.addEventListener('click', showHidePassword);
    secondInputEye.addEventListener('click', showHidePassword);

    enterPassword.addEventListener('input', restrictCyrylic);
    reEnterPassword.addEventListener('input', restrictCyrylic);

    enterPassword.addEventListener('input', validationCreatePasword);
    reEnterPassword.addEventListener('input', recheckPassword);
    notUsePasswordCheckBox.addEventListener('change', checkboxSecurityPopupAppears);
}
