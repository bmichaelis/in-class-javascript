let chat = [];

chat.push(
  {
    text: 'Hi',
    username: 'dragonslayer22',
  },
  {
    text: "what's up",
    username: 'fresh4days',
  }
);

printChat();

function printChat() {
  let chatHtml = '';
  for (let i = 0; i < chat.length; i++) {
    chatHtml += `
        <div>
            <p>${chat[i].text}</p>
            <p>${chat[i].username}</p>
        </div>
        `;
  }
  document.getElementById('chat-window').innerHTML = chatHtml;
}

function addMessage(username) {
  let text = document.getElementById(username).value;
  document.getElementById(username).value = '';
  chat.push({
    text: text,
    username: username,
  });
  printChat();
}
