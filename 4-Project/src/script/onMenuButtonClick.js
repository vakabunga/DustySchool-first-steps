function onMenuButtonClick({ target }) {

    const targetPage = target.dataset.page;
    const buttons = document.querySelectorAll('.menu__button');

    buttons.forEach(thisButton => {
        thisButton.classList.remove('menu__button-active');
    });

    target.classList.add('menu__button-active');

    closeMenu();

    if (!targetPage) {
        return;
    }
    switch (targetPage) {
        case 'house':
            clearPage();
            renderUserDataPage();
            renderAddButton();
            pageTitle.textContent = 'Все записи';
            break;
        case 'card':
            console.log('card'); // отрисовка записей с типом "банковская карта"
            break;
        case 'password':
            console.log('password'); //отрисовка записей с типом "запись пароля"
            break;
        case 'code':
            checkIsPasswordSet(); // запуск функции проверки задан ли пароль. если не задан - отрисовка окна установки пароля, если задан - изменения
            break;
        case 'data':
            console.log('data'); // отрисовка записей с типой "секретные записи"
            break;
        case 'passwordGenerator':
            generationPassword(); // запуск окна для генерации пароля
            pageTitle.textContent = ' ';
            break;
        case 'info':
            console.log('info'); // отрисовка окна "о программе"
            break;
    }
}