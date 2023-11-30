function checkSecurityPopup() {
  resultChecked = localStorage.getItem('checked');

  if (userSetPassword) {
    clearPage();
    renderInputPassword();
    return;
  }

  if (resultChecked === 'false' || resultChecked === null) {
    renderSecurityPopup();
  } else {
    clearPage();
    renderUserDataPage();
    renderAddButton();
  }
}
