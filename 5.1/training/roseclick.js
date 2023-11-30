const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'try deleting button';
page.appendChild(button);
let clickCounter = 0;

function deleteButton(element) {

    return new Promise(function (resolve, reject) {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            clickCounter++;

            if (clickCounter === 3) {
                resolve(element);
            }
        });
    })
}

deleteButton(button).then((result) => {
    result.remove();
})