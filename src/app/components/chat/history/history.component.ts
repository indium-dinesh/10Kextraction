import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  chatHistory: any[] = [];
  @Input() sessions: any[] = [];
  @Output() loadSession = new EventEmitter<any>();
  
  load(session: any) {
    this.loadSession.emit(session);
  }
  constructor() {
    // Mock data for chat history
    this.chatHistory = [
      { id: 1, messages: ['Hello!', 'How can I help you?'] },
      { id: 2, messages: ['What is the weather today?'] },
      { id: 3, messages: ['Tell me a joke!'] }
    ];
  }

  // Method to retrieve chat history
  getChatHistory() {
    return this.chatHistory;
  }

  // Method to clear chat history (if needed)
  clearHistory() {
    this.chatHistory = [];
  }
  openChat  (id: number) {
    // Logic to open chat window with the selected chat ID
    console.log(`Opening chat with ID: ${id}`);
  }
}