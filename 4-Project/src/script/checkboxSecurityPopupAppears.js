function checkboxSecurityPopupAppears({ target }) {
    agreeChecked = target.checked;
    localStorage.setItem('checked', agreeChecked);
    resultChecked = localStorage.getItem('checked');

    if (document.querySelector('.button_create_security_password')) {
        activeButtonStatusChange(agreeChecked, createSecurityPassword);
    }
}