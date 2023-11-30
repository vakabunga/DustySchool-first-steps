function renderStartPage() {
    const startPage = document.createElement('div');
    const startPageHeader = document.createElement('h1');
    const startPageSubHeader = document.createElement('h3');
    const mainLogo = document.createElement('img');

    startPage.classList.add('overhanging-window', 'start-page__wrapper_behaviour', 'start-page__wrapper');
    startPageHeader.classList.add('start-page__header', 'start-page__header_position', 'start-page__header_weight');
    startPageHeader.textContent = 'Паролька';

    startPageSubHeader.classList.add('start-page__sub-header', 'start-page__sub-header_position', 'start-page__sub-header_weight');
    startPageSubHeader.textContent = 'Надёжно храним пароли';

    mainLogo.classList.add('start-page__logo', 'start-page__logo_position');
    mainLogo.src = './src/img/logo.svg';

    mainPage.appendChild(startPage);
    startPage.appendChild(startPageHeader);
    startPage.appendChild(startPageSubHeader);
    startPage.appendChild(mainLogo);
}
