class Message {
  constructor(text, username) {
    this.text = text;
    this.username = username;
    this.timestamp = new Date();
  }
}

class Chat {
  constructor(name) {
    this.name = name;
    this.id = getNewId();
    this.messages = [];
  }
  addMessage(message) {
    this.messages.push(message);
  }
}

class ChatList {
  constructor() {
    this.chats = [];
  }

  addChat(chat) {
    this.chats.push(chat);
  }

  getChat(chatId) {
    return this.chats.find((chat) => chat.id == chatId);
  }

  removeChat(chatId) {
    this.chats = this.chats.filter((chat) => chat.id != chatId);
  }
}
