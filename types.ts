export interface ContentSection {
  id: number;
  title: string;
  content: string;
  icon: string;
  imageUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface HistorianState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
}