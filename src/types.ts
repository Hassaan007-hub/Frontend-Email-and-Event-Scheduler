export interface User {
  email: string;
  name: string;
  picture: string;
  authenticated: boolean;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
