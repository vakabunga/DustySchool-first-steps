function validationCreatePasword({ target }) {
  const password = target.value;
  const statusMessage = target.closest('.input-security-password-wrapper').querySelector('.status-message');

  if (password.match(/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&-+=;:({[\]})!?"])[a-zA-Z0-9@#$%^&-+=;:({[\]})!?"]{4,}$/)) {
      statusMessage.textContent = 'Очень надежный пароль!';
      statusMessage.classList.remove('status-message_weak_password', 'status-message_general_password');
      return;
  }

  if (password.length < 4) {
      statusMessage.classList.add('status-message_weak_password');
      statusMessage.classList.remove('status-message_general_password');
      statusMessage.textContent = 'Слишком простой пароль';
      return;
  }

  if (password.match(/(^[0-9]+$)|(^[a-z]+$)|(^[A-Z]+$)|(?=.*[@#$%^&-+=;:({[\]})!?"]){4,}/)) {
      statusMessage.classList.add('status-message_general_password');
      statusMessage.classList.remove('status-message_weak_password');
      statusMessage.textContent = 'Простой пароль';
      return;
  }

  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{4,}$|^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,}$|^(?=.*[A-Z])(?=.*\d)[A-Z0-9]{4,}$|^(?=.*[a-z])(?=.*[@#$%^&-+=;:({[\]})!?"])[a-z@#$%^&-+=;:({[\]})!?"]{4,}$|^(?=.*[A-Z])(?=.*[@#$%^&-+=;:({[\]})!?"])[A-Z@#$%^&-+=;:({[\]})!?"]{4,}$|^(?=.*[0-9])(?=.*[@#$%^&-+=;:({[\]})!?"])[0-9@#$%^&-+=;:({[\]})!?"]{4,}$/)) {
      statusMessage.classList.add('status-message_general_password');
      statusMessage.classList.remove('status-message_weak_password');
      statusMessage.textContent = 'Хороший пароль';
      return;
  }

  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{4,}$/)) {
      statusMessage.classList.remove('status-message_weak_password', 'status-message_general_password');
      statusMessage.textContent = 'Надежный пароль';
      return;
  }
}
