function renderSecurityPopup() {

    const securityPopup = document.createElement('div');
    securityPopup.classList.add('security-popup');

    const securityPopupTitle = document.createElement('h1');
    securityPopupTitle.classList.add('modal__title');
    securityPopupTitle.textContent = 'Защита страницы';

    const securityPopupDescription = document.createElement('p');
    securityPopupDescription.classList.add('modal-description');
    securityPopupDescription.textContent = 'Для того, чтобы ваши пароли были в безопасности, установите секретный код (пароль) на приложение';

    const securityPopupForm = document.createElement('form');
    securityPopupForm.classList.add('modal-form');

    const securityPopupCheckBoxWrapper = document.createElement('div');
    securityPopupCheckBoxWrapper.classList.add('modal__checkbox-wrapper');

    const securityPopupCheckBox = document.createElement('input');
    securityPopupCheckBox.classList.add('form-checkbox-agree', 'form-checkbox-control');
    securityPopupCheckBox.type = 'checkbox';

    const checkBoxDetails = document.createElement('p');
    checkBoxDetails.classList.add('check-box-details');
    checkBoxDetails.textContent = 'Больше не показывать это окно (секретный код можно задать в настройках)';

    const securityPopupButtonsWrapper = document.createElement('div');
    securityPopupButtonsWrapper.classList.add('modal__buttons-wrapper');

    const createSetPasswordPageButton = document.createElement('button');
    createSetPasswordPageButton.classList.add('modal__button', 'modal__create-button');
    createSetPasswordPageButton.textContent = 'Создать';

    const cancelCreateSetPasswordPageButton = document.createElement('button');
    cancelCreateSetPasswordPageButton.classList.add('modal__button', 'modal__cancel-button');
    cancelCreateSetPasswordPageButton.textContent = 'Отмена';

    mainPage.appendChild(modalWindow);
    modalWindow.appendChild(securityPopup);
    securityPopup.appendChild(securityPopupTitle);
    securityPopup.appendChild(securityPopupDescription);
    securityPopup.appendChild(securityPopupForm);
    securityPopupForm.appendChild(securityPopupCheckBoxWrapper);
    securityPopupCheckBoxWrapper.appendChild(securityPopupCheckBox);
    securityPopupCheckBoxWrapper.appendChild(checkBoxDetails);
    securityPopupForm.appendChild(securityPopupButtonsWrapper);
    securityPopupButtonsWrapper.appendChild(createSetPasswordPageButton);
    securityPopupButtonsWrapper.appendChild(cancelCreateSetPasswordPageButton);

    securityPopupCheckBox.addEventListener('click', checkboxSecurityPopupAppears);

    cancelCreateSetPasswordPageButton.addEventListener('click', cancelRenderCreateSecurityPassword);
    createSetPasswordPageButton.addEventListener('click', function () {
        event.preventDefault();
        renderSecurityPasswordPage();
    });
}