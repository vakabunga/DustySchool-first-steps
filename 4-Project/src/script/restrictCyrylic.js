function restrictCyrylic({ target }) {
    const en = /[0-9a-zA-Z]+/i.test(target.value);
    const ru = /[а-яёА-ЯЁ]+/i.test(target.value);

    if (!(en ^ ru)) {
        target.value = target.value.substring(0, target.value.length - 1);
    }
}