function createSecurityPassword() {
    event.preventDefault();

    const notUsePasswordCheckBox = document.querySelector('.form-checkbox-agree').checked;

    if (notUsePasswordCheckBox) {
        clearPage();
        renderUserDataPage();
        renderAddButton();
        return;
    }
    const statusCreatePassword = document.querySelector('.status-message-create-password');
    statusCreatePassword.textContent = 'Пароль успешно установлен';
    const userPassword = document.querySelector('.input-password').value;
    localStorage.setItem('password', encryptPassword(userPassword));

    setTimeout(function () {
        clearPage();
        renderUserDataPage();
        renderAddButton();
    }, 1200);
}
