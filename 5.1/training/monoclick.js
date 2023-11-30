const page = document.querySelector('.page');

function monoclick() {
    return new Promise(function (resolve, reject) {
        page.addEventListener('click', () => {
            resolve('click is made');
        });
    });
}

monoclick().then((result) => console.log(result));
