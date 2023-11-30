function renderChangeSecurityPasswordPage() {
    event.preventDefault();
    clearPage();
    
    const tittlePasswordModal = document.createElement('h1');
    tittlePasswordModal.classList.add('modal__title');
    const labelPasswordNew = document.createElement('label');
    const enterPasswordNew = document.createElement('input');
    const wrapperPasswordNew = document.createElement('div');
    const labelPassword = document.createElement('label');
    const enterPassword = document.createElement('input');
    const wrapperPassword = document.createElement('div');
    const wrapperRecheckPassword = document.createElement('div');
    const labelRecheckPassword = document.createElement('label');
    const recheckEnterPassword = document.createElement('input');
    tittlePasswordModal.textContent = 'Change Password';
    labelPassword.textContent = 'New Password';
    labelPasswordNew.textContent = 'Old Password';
    labelRecheckPassword.textContent = 'Recheck password';
    const wrapperButtonPassword = document.createElement('div');
    const buttonCreatePassword = document.createElement('button');
    const buttonCancelPassword = document.createElement('button');
    buttonCreatePassword.textContent = 'Change';
    buttonCancelPassword.textContent = 'Cancel';
    const messageWarning = document.createElement('p');
    const textMessageWarning = document.createElement('span');
    const recheckMessage = document.createElement('p');
    const textRecheckMessageWarning = document.createElement('span');
    const messageWarningNew = document.createElement('p');
    const textMessageWarningNew = document.createElement('span');

    enterPasswordNew.setAttribute('type', 'password');
    enterPasswordNew.setAttribute('minlength', '2');
    enterPasswordNew.setAttribute('maxlength', '20');
    enterPasswordNew.classList.add('password');
    enterPasswordNew.classList.add('label');
    enterPassword.setAttribute('type', 'password');
    enterPassword.setAttribute('minlength', '2');
    enterPassword.setAttribute('maxlength', '20');
    enterPassword.classList.add('password');
    enterPassword.classList.add('label');
    messageWarning.classList.add('mes');
    recheckMessage.classList.add('mescheck');
    messageWarning.classList.add('hidden');
    messageWarningNew.classList.add('mescheck')
    recheckEnterPassword.setAttribute('type', 'password');
    recheckEnterPassword.setAttribute('minlength', '2');
    recheckEnterPassword.setAttribute('maxlength', '20');
    recheckEnterPassword.classList.add('recheckpassword');
    recheckEnterPassword.classList.add('password');
    textRecheckMessageWarning.classList.add('textmessage');
    textMessageWarning.classList.add('textmessage');
    textMessageWarningNew.classList.add('textmessage');
    labelPassword.classList.add('label-password');
    labelPasswordNew.classList.add('label-password');
    labelRecheckPassword.classList.add('label-password');
    buttonCreatePassword.classList.add('button-password');
    buttonCancelPassword.classList.add('button-password');

    const closeEye = document.createElement('img');
    closeEye.src = './src/img/close.png';
    closeEye.classList.add('close');
    const openEye = document.createElement('img');
    openEye.src = './src/img/open.png';
    openEye.classList.add('open', 'hidden');

    const closeEyeRecheck = document.createElement('img');
    closeEyeRecheck.src = './src/img/close.png';
    closeEyeRecheck.classList.add('closerecheck');
    const openEyeRecheck = document.createElement('img');
    openEyeRecheck.src = './src/img/open.png';
    openEyeRecheck.classList.add('openrecheck', 'hidden');

    const closeEyeNew = document.createElement('img');
    closeEyeNew.src = './src/img/close.png';
    closeEyeNew.classList.add('closeNew');
    const openEyeNew = document.createElement('img');
    openEyeNew.src = './src/img/open.png';
    openEyeNew.classList.add('openNew', 'hidden');


    wrapperPassword.classList.add('render-change-wrapper')
    wrapperRecheckPassword.classList.add('render-change-wrapper')
    wrapperButtonPassword.classList.add('render-change-wrapper')
    wrapperPasswordNew.classList.add('render-change-wrapper')

    wrapperRecheckPassword.appendChild(closeEyeRecheck);
    wrapperRecheckPassword.appendChild(openEyeRecheck);
    wrapperPassword.appendChild(closeEye);
    wrapperPassword.appendChild(openEye);
    wrapperPasswordNew.appendChild(closeEyeNew);
    wrapperPasswordNew.appendChild(openEyeNew);
    mainPage.appendChild(tittlePasswordModal);
    mainPage.appendChild(wrapperPasswordNew);
    mainPage.appendChild(wrapperPassword);
    mainPage.appendChild(wrapperRecheckPassword);
    wrapperPasswordNew.appendChild(labelPasswordNew)
    wrapperPasswordNew.appendChild(enterPasswordNew)
    wrapperPassword.appendChild(labelPassword);
    wrapperPassword.appendChild(enterPassword);

    wrapperRecheckPassword.appendChild(labelRecheckPassword);
    wrapperRecheckPassword.appendChild(recheckEnterPassword);
    mainPage.appendChild(wrapperButtonPassword);
    wrapperButtonPassword.appendChild(buttonCreatePassword);
    wrapperButtonPassword.appendChild(buttonCancelPassword);
    wrapperPasswordNew.appendChild(messageWarningNew);
    wrapperPasswordNew.appendChild(textMessageWarningNew);
    wrapperPassword.appendChild(messageWarning);
    wrapperPassword.appendChild(textMessageWarning);
    wrapperRecheckPassword.appendChild(recheckMessage);
    wrapperRecheckPassword.appendChild(textRecheckMessageWarning);

    function eyeRecheck() {
        closeEyeRecheck.classList.toggle('hidden');
        openEyeRecheck.classList.toggle('hidden');

        if (openEyeRecheck.classList.contains('hidden')) {
            recheckEnterPassword.setAttribute('type', 'password');
        }

        if (closeEyeRecheck.classList.contains('hidden')) {
            recheckEnterPassword.setAttribute('type', 'text');
        }
    }
    function eyeNew() {
        closeEyeNew.classList.toggle('hidden');
        openEyeNew.classList.toggle('hidden');

        if (openEyeNew.classList.contains('hidden')) {
            enterPasswordNew.setAttribute('type', 'password');
        }

        if (closeEyeNew.classList.contains('hidden')) {
            enterPasswordNew.setAttribute('type', 'text');
        }
    }

    function showHidePassword() {
        closeEye.classList.toggle('hidden');
        openEye.classList.toggle('hidden');

        if (openEye.classList.contains('hidden')) {
            enterPassword.setAttribute('type', 'password');
        }

        if (closeEye.classList.contains('hidden')) {
            enterPassword.setAttribute('type', 'text');
        }
    }

    function validationCreatePasword() {
        if (enterPassword.value.length === 0) {
            textMessageWarning.classList.add('hidden');
        } else textMessageWarning.classList.remove('hidden');

        if (enterPassword.value.length > 0) {
            messageWarning.classList.remove('hidden');
        } else messageWarning.classList.add('hidden');

        if (enterPassword.value.length < 3) {
            textMessageWarning.textContent = ' too weak';

            enterPassword.classList.add('red');
            textMessageWarning.classList.add('red-mes');
            enterPassword.classList.remove('orange', 'green');
            textMessageWarning.classList.remove('orange-mes', 'green-mes');
        }

        if (
            (enterPassword.value.length > 2) &
            (enterPassword.value.length < 8) &
            (enterPassword.value.search(/[0-9]/) === -1)
        ) {
            textMessageWarning.textContent = 'medium';
            enterPassword.classList.add('orange');
            textMessageWarning.classList.add('orange-mes');
            enterPassword.classList.remove('red', 'green');
            textMessageWarning.classList.remove('red-mes', 'green-mes');
        }

        if (
            (enterPassword.value.length >= 8) &
            (enterPassword.value.search(/[0-9]/) !== -1) &
            (enterPassword.value.search(/[A-Z]/) !== -1) &
            (enterPassword.value.search(/[a-z]/) !== -1) &
            (enterPassword.value.search(/-/) !== -1)
        ) {
            textMessageWarning.textContent = 'strong!!!';
            textMessageWarning.classList.add('green');
            textMessageWarning.classList.add('green-mes');
            enterPassword.classList.remove('orange', 'red');
            textMessageWarning.classList.remove('orange-mes', 'red-mes');
        }
    }

    function recheckPassword() {
        const userPassword = enterPassword.value;
        if (recheckEnterPassword.value.length === 0) {
            textRecheckMessageWarning.classList.add('hidden');
        } else {
            textRecheckMessageWarning.classList.remove('hidden');
        }

        if (recheckEnterPassword.value === userPassword) {
            textRecheckMessageWarning.textContent = 'Correct';
        } else {
            textRecheckMessageWarning.textContent = 'Incorrect';
        }
    }

    function createSecurityPassword() {
        const userPassword = enterPassword.value;
        localStorage.setItem('password', userPassword);

        if (
            (userPassword.length > 0) &
            (textRecheckMessageWarning.textContent === 'Correct')
        ) {
            clearPage();
            renderUserDataPage();
        }
    }
    
    function createSecurityPasswordChange() {
        const userPassword = enterPassword.value;
        password = localStorage.getItem('password');
        recheckPasswordNew()
        if (
            (userPassword.length > 0) &
            (textRecheckMessageWarning.textContent === 'Correct') & enterPasswordNew.value === password
        ) {
            localStorage.setItem('password', userPassword);
            clearPage();
            renderUserDataPage();
        }
    }
    function recheckPasswordNew() {
        const userPasswordNew = enterPasswordNew.value;
        if (recheckEnterPassword.value.length === 0) {
            textRecheckMessageWarning.classList.add('hidden');
        } else {
            textRecheckMessageWarning.classList.remove('hidden');
        }

        if (recheckEnterPassword.value !== password) {
            messageWarningNew.classList.remove('hidden')
            enterPasswordNew.style.borderColor = 'tomato'
            textMessageWarningNew.textContent = ' Enter correct password';
            setTimeout(function () {
                textMessageWarningNew.textContent = '';
            }, 2500);

        } else messageWarningNew.classList.add('hidden')
    }

    closeEye.addEventListener('click', showHidePassword);
    openEye.addEventListener('click', showHidePassword);

    closeEyeRecheck.addEventListener('click', eyeRecheck);
    openEyeRecheck.addEventListener('click', eyeRecheck);

    closeEyeNew.addEventListener('click', eyeNew);
    openEyeNew.addEventListener('click', eyeNew);

    enterPassword.addEventListener('input', validationCreatePasword);
    buttonCreatePassword.addEventListener('click', createSecurityPasswordChange);
    buttonCancelPassword.addEventListener('click', cancelRenderCreateSecurityPassword)
    recheckEnterPassword.addEventListener('input', recheckPassword);
}