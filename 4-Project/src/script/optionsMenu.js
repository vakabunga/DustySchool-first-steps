const menuButtons = document.querySelector('.modal-window-menu__case-button');
const menuButtonIcon = document.querySelector('.icon-button_type_menu');
const modalWindowMenu = document.querySelector('.modal-window-menu');
let activeButton = document.querySelector('.menu__button-password');

function closeMenu() {
    page.classList.remove('page_shadow');
    modalWindowMenu.classList.add('hidden');
    page.removeEventListener('click', closeMenu);
}

menuButtons.addEventListener('click', onMenuButtonClick);

modalWindowMenu.addEventListener('click', function (event) {
    event.stopPropagation();
});

menuButtonIcon.addEventListener('click', function () {
    modalWindowMenu.classList.remove('hidden');
    page.classList.add('page_shadow');
    setTimeout(() => {
        page.addEventListener('click', closeMenu)
    }, 0);
}); 