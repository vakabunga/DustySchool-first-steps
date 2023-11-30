function renderUserDataPage() {
  if (localStorage.getItem('userDataStorage') === null) {
    return;
  }
  
  readUserDataStorage();

  const userData = Object.keys(userDataStorage);

  const mainContent = document.createElement('div');
  mainContent.classList.add('main__content');
  
  mainPage.appendChild(mainContent);

  for (const userDataElement of userData) {
    const userDataElementWrapper = document.createElement('div');
    userDataElementWrapper.dataset.name = userDataElement;
    const userDataObject = userDataStorage[userDataElement];
    userDataElementWrapper.dataset.id = userDataObject.id;
    userDataElementWrapper.dataset.type = userDataObject.type;
  
    const userDataIcon = document.createElement('i');
    const userDataWrapper = document.createElement('div');
    const userDataNameWrapper = document.createElement('div');
    const userDataElementName = document.createElement('p');
    const userDataElementNote = document.createElement('p');
    const userDataDateWrapper = document.createElement('div');
    const userDataDateCreate = document.createElement('p');
    const userDataDateChange = document.createElement('p');

    if (userDataObject.type === 'password') {
      userDataIcon.classList.add('fa-solid', 'fa-lock');
      userDataDateCreate.textContent = userDataObject.date;
    }

    if (userDataObject.type === 'card') {
      userDataIcon.classList.add('fa-solid', 'fa-credit-card');
      userDataDateCreate.textContent = userDataObject.number;
    }

    userDataElementWrapper.classList.add('data-element');
    userDataIcon.classList.add('user-data-icon');
    userDataWrapper.classList.add('user-data-wrapper');
    userDataNameWrapper.classList.add('user-data-name-wrapper');
    userDataElementName.classList.add('user-data-element-name');
    userDataElementNote.classList.add('user-data-element-note');
    userDataDateWrapper.classList.add('user-data-date-wrapper');
    userDataDateCreate.classList.add('user-data-date-create');
    userDataDateChange.classList.add('user-data-date-change');

    userDataElementName.textContent = userDataElement;
    userDataElementNote.textContent = userDataObject.note;

    mainContent.appendChild(userDataElementWrapper);
    userDataElementWrapper.appendChild(userDataIcon);
    userDataElementWrapper.appendChild(userDataWrapper);
    userDataWrapper.appendChild(userDataNameWrapper);
    userDataNameWrapper.appendChild(userDataElementName);
    userDataNameWrapper.appendChild(userDataElementNote);
    userDataWrapper.appendChild(userDataDateWrapper);
    userDataDateWrapper.appendChild(userDataDateCreate);
    userDataDateWrapper.appendChild(userDataDateChange);

    userDataElementWrapper.addEventListener('click', editPassword);
  }
}
