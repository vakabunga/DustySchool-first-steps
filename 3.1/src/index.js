function checkDuplicateElemArray(array)  {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) { 
            return false; 
        } 
    } 
    return true;
}

function createSecretNumber() {
    const secretNumber = [];
    while (secretNumber.length < 4) {
        let number = Math.floor(Math.random() * 9);
        secretNumber.includes(number) ? number = Math.floor(Math.random() * 9) : secretNumber.push(number);
    }
    console.log(secretNumber);
    return secretNumber;
}

let secretNumber = createSecretNumber();


const tryNumber = document.getElementById('try');
const sendButton = document.getElementById('button');
const answers = document.getElementById('answers');
const error = document.getElementById('error');
const gameForm = document.getElementById('gameForm');
const newGameForm = document.getElementById('newGameForm');
const newGameButton = document.getElementById('newGameButton');

sendButton.onclick = function() {
    const checkedNumber = tryNumber.value;
    error.classList.add('hidden');
    let bull = 0;
    let cow = 0;

    if (checkedNumber.length != 4 || !checkDuplicateElemArray(checkedNumber)) {
        error.classList.remove('hidden');
        tryNumber.value = '';
        return;
    }

    for (let i = 0; i < 4; i++) {
        if (secretNumber[i] === +checkedNumber[i]) {
            bull += 1;
        } else if (secretNumber.includes(+checkedNumber[i])) {
            cow += 1;
        }
    }

    answers.innerHTML += `<p class="text">Ваш ответ: ${checkedNumber}. Бык - ${bull}, Корова - ${cow}</p>`;
    tryNumber.value = '';

    if (bull === 4) {
        gameForm.classList.add('hidden');
        newGameForm.classList.remove('hidden');
    }
}

newGameButton.onclick = function () {
    newGameForm.classList.add('hidden');
    gameForm.classList.remove('hidden');
    answers.innerHTML = '';
    secretNumber = createSecretNumber();
}