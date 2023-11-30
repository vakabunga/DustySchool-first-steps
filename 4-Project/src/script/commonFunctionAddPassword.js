function commonFunctionAddPassword() {
    if (formSubmit() === false) {
        return;
    };
    writeUserDataStorage(userDataStorage);
    clearPage();
    renderUserDataPage();
    renderAddButton();
    pageTitle.textContent = 'Все записи';
}