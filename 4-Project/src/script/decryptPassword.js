function decryptPassword(encryptedPassword) {
    let decryptedPassword = '';

    for (let i = 0; i < encryptedPassword.length; i++) {
        let charCode = encryptedPassword.charCodeAt(i);
        charCode -= 10; // обратное преобразование - уменьшение кода символа на 10
        decryptedPassword += String.fromCharCode(charCode);
    }
    
    return decryptedPassword;
}