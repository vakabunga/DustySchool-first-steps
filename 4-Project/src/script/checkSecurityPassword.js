function checkSecurityPassword() {
  const enterProtectApp = mainPage.querySelector('.password');

  if (encryptPassword(enterProtectApp.value) === localStorage.getItem('password')) {
    clearPage();
    renderUserDataPage();
    renderAddButton();
    return;
  }

  const protectAppMessage = mainPage.querySelector('.status-message');
  enterProtectApp.classList.add('input-password_weak_password');
  protectAppMessage.classList.add('status-message_weak_password');
  protectAppMessage.textContent = 'Неверный пароль. Повторите ввод';

  setTimeout(function () {
    protectAppMessage.textContent = '';
  }, 2500);
}