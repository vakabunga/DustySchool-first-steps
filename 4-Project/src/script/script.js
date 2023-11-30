/* eslint-disable semi */
const mainPage = document.querySelector('.main');

const modalWindow = document.createElement('div');
modalWindow.classList.add('modal', 'overhanging-window');

const pageTitle = document.querySelector('.page-title');

let userDataStorage = {};
let resultChecked;
let agreeChecked;
let userSetPassword;

if (localStorage.getItem('password')) {
    userSetPassword = decryptPassword(localStorage.getItem('password'));
} else {
    userSetPassword = localStorage.getItem('password');
}

const screenDimensions = [document.documentElement.clientWidth, document.documentElement.clientHeight];
const page = document.querySelector('.page');
page.style.height = screenDimensions[1] + 'px';
page.style.width = screenDimensions[0] + 'px';

const securityPopup = document.querySelector('.security-popup');
const wrapper = document.querySelector('.modal__content')
const settingsButton = document.querySelector('.icon-button_type_menu');

if (localStorage.getItem('userDataStorage') === null) {
    localStorage.setItem('userDataStorage', JSON.stringify(userDataStorage));
}

renderStartPage();

setTimeout(function () {
    clearPage();
    checkSecurityPopup();
}, 1200);
