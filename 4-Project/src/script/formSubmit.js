function formSubmit() {
    if (event) {
        event.preventDefault();
    }

    const inputList = mainPage.querySelectorAll('.enter');
    const currentFormType = mainPage.querySelector('.form').dataset.type;
    const currentFormNameElement = mainPage.querySelector('[data-type="name"]');
    const currentFormName = currentFormNameElement.value;

    if (checkDuplicateNames() === false) {
        return false;
      };
  
    userDataStorage[currentFormName] = {};
    userDataStorage[currentFormName].type = currentFormType;
    userDataStorage[currentFormName].id = Object.keys(userDataStorage).length - 1;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    userDataStorage[currentFormName].date = dd + '.' + mm + '.' + yyyy;

    for (const inputItem of inputList) {
        const inputItemType = inputItem.dataset.type;
        if (inputItemType === 'password') {
            userDataStorage[currentFormName][inputItemType] = encryptPassword(inputItem.value);
        } else {
            userDataStorage[currentFormName][inputItemType] = inputItem.value;
        }
    }

    writeUserDataStorage(userDataStorage);
    clearPage();
    renderUserDataPage();
    renderAddButton();
    pageTitle.textContent = 'Все записи';
}