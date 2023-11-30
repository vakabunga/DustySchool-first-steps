function checkedCheckbox() {
  agreeChecked = securityPopupCheckBox.checked;
  localStorage.setItem('checked', agreeChecked);
  resultChecked = localStorage.getItem('checked');
}
