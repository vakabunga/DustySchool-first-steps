function checkDuplicateNames() {
    readUserDataStorage();
    itemNames = Object.keys(userDataStorage);
    const currentFormNameElement = mainPage.querySelector('[data-type="name"]');
    const currentFormName = currentFormNameElement.value;

    if (itemNames.includes(currentFormName)) {
        currentFormNameElement.classList.add('input-password_weak_password', 'status-message_weak_password');
        alertPopup('Такое имя уже существует');
        const alertPopupElement = document.querySelector('.alert');
        setTimeout(function () {
            alertPopupElement.remove();
            currentFormNameElement.classList.remove('input-password_weak_password', 'status-message_weak_password');
        }, 1200)
        return false;
    }
}