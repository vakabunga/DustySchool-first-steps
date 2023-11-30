function showHidePassword({ target }) {
    const inputPassword = target.closest('.input-password-wrapper').querySelector('.input-password');
    
    if (target.classList.contains('fa-eye-slash')) {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }

    target.classList.toggle('fa-eye');
    target.classList.toggle('fa-eye-slash');
}
