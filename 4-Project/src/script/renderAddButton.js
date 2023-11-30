function renderAddButton() {
    const mainFooter = document.createElement('footer');
    const addButton = document.createElement('button');

    mainFooter.classList.add('main__footer');
    addButton.classList.add('button', 'add-button', 'button_width_max');
    addButton.textContent = 'Создать новую запись';

    addButton.addEventListener('click', function() {
        pageTitle.textContent = '';
        renderAddMenu();
    });

    mainPage.appendChild(mainFooter);
    mainFooter.appendChild(addButton);
}
