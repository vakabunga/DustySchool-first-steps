function renderInputPassword() {
    const inputPasswordWindow = document.createElement('div');
    inputPasswordWindow.classList.add('start-page__wrapper', 'overhanging-window', 'overhanging-window_paddings');

    const inputPasswordTitle = document.createElement('h1');
    inputPasswordTitle.textContent = 'Для продолжения введите пароль';
    inputPasswordTitle.classList.add('start-page__sub-header', 'start-page__header_weight', 'security-password-page__header_position');

    const inputPasswordForm = document.createElement('div');
    const inputPasswordInput = document.createElement('input');
    const inputPasswordIcon = document.createElement('i');
    const inputPasswordText = document.createElement('p');
    inputPasswordInput.setAttribute('type', 'password');
    inputPasswordForm.classList.add('input-security-password-wrapper', 'input-password-wrapper');
    inputPasswordInput.classList.add('input', 'input-password', 'password');
    inputPasswordIcon.classList.add('fa-regular', 'fa-eye-slash');
    inputPasswordText.classList.add('status-message', 'status-message-position');

    const inputPasswordButton = document.createElement('button');
    inputPasswordButton.disabled = true;
    inputPasswordButton.textContent = 'Продолжить';
    inputPasswordButton.classList.add('button', 'button_width_max', 'button_position', 'button_create_security_password', 'button_inactive');

    mainPage.appendChild(inputPasswordWindow);
    inputPasswordWindow.appendChild(inputPasswordTitle);
    inputPasswordWindow.appendChild(inputPasswordForm);
    inputPasswordForm.appendChild(inputPasswordInput);
    inputPasswordForm.appendChild(inputPasswordIcon);
    inputPasswordForm.appendChild(inputPasswordText);
    inputPasswordWindow.appendChild(inputPasswordButton);

    inputPasswordIcon.addEventListener('click', showHidePassword);

    inputPasswordInput.addEventListener('input', function ({ target }) {
        activeButtonStatusChange(target.value.length > 0, checkSecurityPassword);
    });
}