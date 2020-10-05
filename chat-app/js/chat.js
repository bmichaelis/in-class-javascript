function Message(text, username) {
  this.text = text;
  this.username = username;
  this.timestamp = new Date();
}

function Chat(name) {
  this.name = name;
  this.chatId = getNewId();
  this.messages = [];
  this.addMessage = (message) => {
    this.messages.push(message);
  };
}

function ChatList() {
  this.chats = [];
  this.addChat = (chat) => {
    this.chats.push(chat);
  };
  this.removeChat = (chatId) => {
    this.chats = this.chats.filter((chat) => chat.id != chatId);
  };
}
