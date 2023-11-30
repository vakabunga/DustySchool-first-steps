function renderAddMenu() {
    clearPage();

    const buttonsCase = document.createElement('div');
    const buttonAddNewPassword = document.createElement('button');
    const buttonAddNewCard = document.createElement('button');

    buttonAddNewPassword.textContent = 'Добавить новый пароль';
    buttonAddNewPassword.classList.add('buttons-case__buttons');

    buttonAddNewCard.textContent = 'Добавить новую карту';
    buttonAddNewCard.classList.add('buttons-case__buttons');

    buttonsCase.classList.add('buttons-case');

    mainPage.appendChild(buttonsCase);
    buttonsCase.appendChild(buttonAddNewPassword);
    buttonsCase.appendChild(buttonAddNewCard);

    buttonAddNewPassword.addEventListener('click', function () {
        pageTitle.textContent = 'Создать новый пароль';
        renderAddPasswordPage();
    });

    buttonAddNewCard.addEventListener('click', function() {
        pageTitle.textContent = 'Создать новую карту';
        renderAddCardPage()
    });
}