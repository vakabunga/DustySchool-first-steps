function recheckPassword({ target }) {
    const userPassword = target.closest('.security-password-create-page-form').querySelector('.input-password').value;
    const checkStatusMessage = target.closest('.input-security-password-wrapper').querySelector('.status-message');

    if (target.value === userPassword) {
        checkStatusMessage.textContent = 'Пароли совпадают';
        checkStatusMessage.classList.remove('status-message_weak_password');
        localStorage.setItem('validPassword', true);
    } else {
        checkStatusMessage.textContent = 'Пароль не совпадает. Проверьте правильность ввденного пароля';
        checkStatusMessage.classList.add('status-message_weak_password');
    }

    activeButtonStatusChange(target.value === userPassword, createSecurityPassword);
}
