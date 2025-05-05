import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Investment Analyst AI Assistant';
  showHistory = false;
  sessions: any[] = [];
  currentMessages: any[] = [];

  // Called from + button
  createNewChat() {
    if (this.currentMessages.length > 0) {
      const timestamp = new Date();
      const title = this.currentMessages[0]?.content?.slice(0, 30) || 'Untitled';

      // Save to session history
      this.sessions.unshift({
        id: timestamp.getTime(),
        name: `${title}...`,
        messages: [...this.currentMessages],
        createdAt: timestamp,
      });
    }

    // Clear current chat
    this.currentMessages = [];
  }

  // When user types or sends a message, push to currentMessages
  onMessage(message: any) {
    this.currentMessages.push(message);
  }

  // When user clicks a session from history
  loadSession(session: any) {
    this.currentMessages = [...session.messages];
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

}
