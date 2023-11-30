const page = document.querySelector('.page');
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'delete me';
page.appendChild(button);


function mcclick(element) {

    return new Promise((resolve) => {
        let clickTimer = 0;

        button.addEventListener('click', (event) => {
            event.preventDefault();

            if (Date.now() - clickTimer < 1000) {
                resolve(element);
            }

            clickTimer = Date.now();
        })
    })
}

mcclick(button).then((result) => {
    result.remove();
})