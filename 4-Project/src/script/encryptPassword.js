function encryptPassword(password) {
    let encryptedPassword = '';

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        charCode += 10; // пример шифрования - увеличение кода символа на 10 (можно написать любое число)
        encryptedPassword += String.fromCharCode(charCode);
    }
    
    return encryptedPassword;
}