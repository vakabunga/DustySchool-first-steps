function alertPopup(alert) {
    const alertWrapper = document.createElement('div');
    const alertPopup = document.createElement('div');
    const alertPopupText = document.createElement('h1');
    alertWrapper.classList.add('alert');
    alertPopup.classList.add('alert-popup');
    alertPopupText.classList.add('alert__title');
    alertPopupText.textContent = alert;

    mainPage.appendChild(alertWrapper);
    alertWrapper.appendChild(alertPopup);
    alertPopup.appendChild(alertPopupText);
}