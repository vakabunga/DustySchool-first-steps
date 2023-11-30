function saveChangesToStorage(name, id) {
    const date = userDataStorage[name].date;
    delete userDataStorage[name];
    writeUserDataStorage(userDataStorage);

    const inputList = mainPage.querySelectorAll('.enter');
    let currentFormName = mainPage.querySelector('[data-type="name"]').value;
    const currentFormType = mainPage.querySelector('.form').dataset.type;

    if (name !== currentFormName && checkDuplicateNames() === false) {
        return false;
    }

    userDataStorage[currentFormName] = {};
    userDataStorage[currentFormName].type = currentFormType;
    userDataStorage[currentFormName].id = id;
    userDataStorage[currentFormName].date = date;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    userDataStorage[currentFormName]['edit date'] = dd + '.' + mm + '.' + yyyy;

    for (const inputItem of inputList) {
        const inputItemType = inputItem.dataset.type;
        userDataStorage[currentFormName][inputItemType] = inputItem.value;
    }
}