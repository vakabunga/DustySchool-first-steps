function editPassword(event) {
  if (event) {
    event.preventDefault();
  }

  const currentTarget = event.currentTarget;

  clearPage();

  if (currentTarget.dataset.type === 'password') {
    renderAddPasswordPage();
  }

  if (currentTarget.dataset.type === 'card') {
    renderAddCardPage();
  }

  var editedName = currentTarget.dataset.name;
  pageTitle.textContent = 'Редактирование записи: ' + editedName;
  const editEntryButton = document.querySelector('.create-button');
  const cancelEditEntryButton = document.querySelector('.cancel-button');
  editEntryButton.textContent = 'Сохранить';
  editEntryButton.dataset.type = 'edit';

  readUserDataStorage();

  const inputList = mainPage.querySelectorAll('.enter');
  const currentObject = userDataStorage[editedName];


  for (const inputItem of inputList) {
    inputItem.disabled = true;

    inputItem.closest('.wrapperenter').addEventListener('click', function ({ currentTarget }) {
      currentTarget.querySelector('.enter').disabled = false;
      currentTarget.querySelector('.enter').classList.add('editable-background');
    })

    inputItem.addEventListener('blur', function ({ target }) {
      target.classList.remove('editable-background');
      target.disabled = true;
    })

    const inputItemType = inputItem.dataset.type;

    if (currentObject[inputItemType]) {
      if (inputItemType === 'password') {
        inputItem.value = decryptPassword(currentObject[inputItemType]);
      } else {
        inputItem.value = currentObject[inputItemType];
        inputItem.closest('.wrapperenter').querySelector('.label-password').textContent = inputItem.placeholder;
      }
    } else {
      inputItem.value = '';
    }
  }

  if (currentTarget.dataset.type === 'password') {
    document.querySelector('.link-for-icon').href = document.querySelector('[data-type="url"]').value;
  }
  editEntryButton.removeEventListener('click', formSubmit);

  editEntryButton.addEventListener('click', function (event) {
    event.preventDefault();
    readUserDataStorage();
    saveChangesToStorage(currentTarget.dataset.name, currentTarget.dataset.id);
    writeUserDataStorage(userDataStorage);
    clearPage();
    renderUserDataPage();
    renderAddButton();
    pageTitle.textContent = 'Все записи';
  });

  cancelEditEntryButton.addEventListener('click', function () {
    cancelRenderCreateSecurityPassword();
    pageTitle.textContent = 'Все записи';
  });
}
