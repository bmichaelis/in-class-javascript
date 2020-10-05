const chats = new ChatList();
const chat = new Chat('Chat 1');

const dragonslayer22 = new User('dragonslayer22');
const fresh4Days = new User('fresh4Days');

chat.addMessage(new Message('Hi', dragonslayer22.username));
chat.addMessage(new Message("what's up", fresh4Days.username));

chats.addChat(chat);
chats.addChat(new Chat('Other Conversation'))

printChat();
printChats();

function printChat() {
  let chatHtml = '';
  chat.messages.forEach((message) => {
    chatHtml += `
        <div class="message">
            <p class="text">${message.text}</p>
            <p class="username">${message.username}</p>
        </div>
        `;
  });
  document.getElementById('chat-window').innerHTML = chatHtml;
}

function printChats() {
  let chatsHtml = '';

  chats.chats.forEach((chat) => {
    chatsHtml += `
    <div class="border">${chat.name}</div>
    `;
  });

  document.getElementById('chat-list').innerHTML = chatsHtml;
}

function addMessage(username) {
  let text = document.getElementById(username).value;
  document.getElementById(username).value = '';
  chat.addMessage(new Message(text, username));
  printChat();
}
