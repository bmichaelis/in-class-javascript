const chats = new ChatList();
let currentChat = new Chat('Chat 1');

const dragonslayer22 = new User('dragonslayer22');
const fresh4Days = new User('fresh4Days');

currentChat.addMessage(new Message('Hi', dragonslayer22.username));
currentChat.addMessage(new Message("what's up", fresh4Days.username));

chats.addChat(currentChat);
chats.addChat(new Chat('Other Conversation'));

printChat();
printChats();

function printChat() {
  let chatHtml = '';
  currentChat.messages.forEach((message) => {
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
    <div class="border" onclick="selectChat(${chat.id})">${chat.name}</div>
    `;
  });

  document.getElementById('chat-list').innerHTML = chatsHtml;
}

function addMessage(username) {
  let text = document.getElementById(username).value;
  document.getElementById(username).value = '';
  currentChat.addMessage(new Message(text, username));
  printChat();
}

function addChat(event) {
  if (event.key == 'Enter' || event.type == 'click') {
    const chatName = document.getElementById('new-chat-name').value;
    if (chatName) {
      const newChat = new Chat(chatName);
      document.getElementById('new-chat-name').value = '';
      chats.addChat(newChat);
      currentChat = newChat;
      printChat();
      printChats();
    }
  }
}

function selectChat(chatId) {
  currentChat = chats.getChat(chatId);
  printChat();
}
