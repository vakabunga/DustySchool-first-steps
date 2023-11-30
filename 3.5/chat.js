/* eslint-disable semi */
window.addEventListener('DOMContentLoaded', function () {
  const chats = document.querySelectorAll('.chat');
  let counter = 0;

  for (const chat of chats) {
    chat.dataset.number = counter;

    const chatWindow = document.createElement('div');
    chatWindow.classList.add('chat-window');

    const chatWindowMessages = document.createElement('div');
    chatWindowMessages.classList.add('chat-window-messages');

    const formInputMessage = document.createElement('form');
    formInputMessage.classList.add('form-input-message');
    formInputMessage.action = 'submit';

    const inputMessage = document.createElement('input');
    inputMessage.classList.add('input-message');
    inputMessage.autofocus = true;

    const messageSendButton = document.createElement('button');
    messageSendButton.classList.add('message-send-button');
    messageSendButton.textContent = 'Send';

    chat.appendChild(chatWindow);
    chatWindow.appendChild(chatWindowMessages);
    chat.appendChild(formInputMessage);
    formInputMessage.appendChild(inputMessage);
    formInputMessage.appendChild(messageSendButton);

    let messageMemory = {};
    let messageMemoryNumber = 0;

    if (localStorage.getItem(`Chat ${chat.dataset.number}`)) {
      messageMemory = JSON.parse(localStorage.getItem(`Chat ${chat.dataset.number}`));

      for (const value of Object.values(messageMemory)) {
        const restoreMessage = document.createElement('p');
        restoreMessage.classList.add('message');
        restoreMessage.textContent = value;
        chat.querySelector('.chat-window-messages').appendChild(restoreMessage);
      }

      messageMemoryNumber = Object.keys(messageMemory).length - 1;
    }

    formInputMessage.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!inputMessage.value.trim()) {
        inputMessage.value = '';
        return;
      }

      const message = document.createElement('p');
      message.classList.add('message');
      message.textContent = inputMessage.value;

      messageMemory[messageMemoryNumber] = inputMessage.value;

      localStorage.setItem(`Chat ${chat.dataset.number}`, JSON.stringify(messageMemory));

      messageMemoryNumber += 1;
      inputMessage.value = '';

      chatWindowMessages.appendChild(message);
    });
    counter += 1;
  }
});
