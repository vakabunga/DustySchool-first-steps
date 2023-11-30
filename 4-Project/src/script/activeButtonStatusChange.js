function activeButtonStatusChange(trigger, callback) {

    const activeButton = document.querySelector('.button_create_security_password');

    if (trigger) {
        activeButton.disabled = false;
        activeButton.addEventListener('click', callback);
        activeButton.classList.remove('button_inactive');
    } else {
        activeButton.disabled = true;
        activeButton.removeEventListener('click', callback);
        activeButton.classList.add('button_inactive');
    }
}

