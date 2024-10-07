export const USERS_DATA = 1;

export interface User {
  id: number;
  name: string;
  chats: number[];
}

export interface Chat {
  id: number;
  users: number[];
}

export interface Message {
  id: number;
  chatId: number;
  senderId: number;
  text?: string;
  timestamp: number;
  image?: string;
  file?: string;
  video?: string;
}

export const USERS_CHAT_DATA: User[] = [
  { id: 1, name: "test", chats: [1, 2] },
  { id: 2, name: "test1", chats: [2, 3] },
  { id: 3, name: "test2", chats: [1, 3] },
];

export const CHATS_DATA: Chat[] = [
  { id: 1, users: [1, 3] },
  { id: 2, users: [1, 2] },
  { id: 3, users: [2, 3] },
];

export const MESSAGES_DATA: Message[] = [
  {
    id: 1,
    chatId: 1,
    senderId: 1,
    text: "Hey, how's everything?",
    timestamp: 1,
  },
  { id: 2, chatId: 1, senderId: 3, text: "All good! You?", timestamp: 2 },
  {
    id: 3,
    chatId: 1,
    senderId: 1,
    text: "Great, thanks for asking.",
    timestamp: 3,
  },
  { id: 4, chatId: 1, senderId: 3, text: "Glad to hear!", timestamp: 4 },
  { id: 5, chatId: 1, senderId: 1, text: "Catch up soon?", timestamp: 5 },
  {
    id: 6,
    chatId: 1,
    senderId: 3,
    text: "Definitely, talk later.",
    timestamp: 6,
  },

  {
    id: 10,
    chatId: 2,
    senderId: 1,
    text: "Are you available for the meeting?",
    timestamp: 1,
  },
  {
    id: 11,
    chatId: 2,
    senderId: 2,
    text: "Yes, when do we start?",
    timestamp: 2,
  },
  {
    id: 12,
    chatId: 2,
    senderId: 1,
    text: "In about 10 minutes.",
    timestamp: 3,
  },
  {
    id: 13,
    chatId: 2,
    senderId: 2,
    text: "Okay, I'll be ready.",
    timestamp: 4,
  },
  {
    id: 14,
    chatId: 2,
    senderId: 1,
    text: "Perfect, see you then.",
    timestamp: 5,
  },

  {
    id: 18,
    chatId: 3,
    senderId: 3,
    text: "What's the latest update?",
    timestamp: 1,
  },
  {
    id: 19,
    chatId: 3,
    senderId: 1,
    text: "We are on track with the project.",
    timestamp: 2,
  },
  {
    id: 20,
    chatId: 3,
    senderId: 3,
    text: "Great! Let me know if you need anything.",
    timestamp: 3,
  },
  {
    id: 21,
    chatId: 3,
    senderId: 1,
    text: "Will do, thanks for checking in.",
    timestamp: 4,
  },
];

export const getUserChats = (id: number) => {
  const chats = CHATS_DATA.filter((chat) => chat.users.includes(id));
  chats.sort((a, b) => a.users.indexOf(id) - b.users.indexOf(id));
  return chats;
};

export const getChatMessages = (chatId: number) => {
  return MESSAGES_DATA.filter((message) => message.chatId === chatId);
};

export const getUser = (id: number) => {
  return USERS_CHAT_DATA.find((user) => user.id === id);
};

export const getChat = (id: number) => {
  return CHATS_DATA.find((chat) => chat.id === id);
};
