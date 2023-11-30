const page = document.querySelector('.page');

for (let i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.textContent = 'button ' + i;
    button.classList.add('button');
    page.appendChild(button);
}

const buttons = document.querySelectorAll('.button');

function doubleKill() {
    return new Promise((resolve, reject) => {
        console.log('promise executed')
        let firstButtonClicks = false;
        let secondButtonClicks = false;
        buttons.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();

                if (event.target === buttons[0]) {
                    firstButtonClicks = true;
                }

                if (event.target === buttons[1]) {
                    secondButtonClicks = true;
                }

                if (firstButtonClicks && secondButtonClicks) {
                    resolve('double kill');
                };

            })
        })
    })
}

doubleKill().then((result) => { console.log(result) })