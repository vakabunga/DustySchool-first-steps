function checkIsPasswordSet() {
    const password = localStorage.getItem('password');

    if (password !== null) {
        renderChangeSecurityPasswordPage();
    } else {
        renderSecurityPasswordPage();
    }
}