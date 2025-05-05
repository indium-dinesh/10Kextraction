import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  // messages: { text: string; isUser: boolean, content: string, time: Date }[] = [];
  inputMessage: string = '';
  loading: boolean = false;
  currentMessage: string = '';
  @Input() messages: { text: string; isUser: boolean, content: string, time: Date, pdfFiles?: any[], attachments?: any[], error?: boolean }[] = [];
  @Output() newMessage = new EventEmitter<any>();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    // Initialize chat window
    // let botMsg: any = {
    //   isUser: false,
    //   text: 'Error uploading file',
    //   error: true,
    //   time: new Date()
    // };
    // this.newMessage.emit(botMsg);

  }
  selectedPDF: any = null;
  selectImage: any = null;
  attachedFileName: string | null = null;
  selectedFile: File | null = null;
  showViewer = false;
  imageUrl: string | null = null;

  viewPDF(message: any) {
    console.log('viewPDF', message);
    const Url = this.chatService.apiUrl + 'view_pdf?file_path=' + (message.metadata.file_path);
    const page_num = message.metadata.page_num;
    // this.chatService.viewPDF(Url).subscribe((response: any) => {
    // })
    this.selectedPDF = {
      url: Url,
      // url: '/assets/mocks/FORD.pdf',
      page: message.pageNo || page_num,   // go to page 3
      searchText: message.searchText || '', // search for "E"
      show: true
    };
  }


  uploadFile(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.attachedFileName = file.name;
      console.log('Selected file:',file); 
      this.selectedFile = file;
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.loading = true;
      this.clearAttachment();
      let usrmsg: any = {
        text: 'File uploading - ' + file.name,
        isUser: true,
        content: '',
        time: new Date()
      };
      this.newMessage.emit(usrmsg);
      this.chatService.uploadFile(formData).subscribe({
        next: (response) => {
          console.log('File uploaded successfully', response);
          // userMsg.attachments = this.selectedFile;
          // afterUpload(); // <-- Call sendMessage only after upload
          let botMsg: any = {
            text: 'File uploaded successfully - ' + file.name,
            isUser: false,
            content: '',
            time: new Date()
          };
          this.newMessage.emit(botMsg);
          this.clearAttachment();
          this.loading = false;
        },
        error: (err) => {
          console.error('Error uploading file', err);
          this.loading = false;
          let botMsg: any = {
            isUser: false,
            error: true,  
            text: 'Error uploading file, Please try again later.',
            time: new Date()
          };
          this.newMessage.emit(botMsg);

        }
      });
    }
  }

  clearAttachment(): void {
    this.attachedFileName = null;
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset input value
    }
    this.selectedFile = null;

  }

  sendMessage(): void {
    if (!this.inputMessage.trim()) return;

    let userMsg: any = {
      text: this.inputMessage,
      isUser: true,
      attachments: [],
      content: '',
      time: new Date()
    };
    this.loading = true;
    this.newMessage.emit(userMsg); // emit user's message
    this.inputMessage = '';

    this.chatService.sendMessage(userMsg.text).subscribe({
      next: (response) => {
        const botMsg = {
          text: response?.answer?.Intermediate_message,
          pdfFiles: response?.answer?.documents,
          isUser: false,
          content: response.content,
          time: new Date(),
          pageNo: 2
        };

        this.newMessage.emit(botMsg);
        this.loading = false;
        this.inputMessage = '';
        this.clearAttachment();
      },
      error: (err) => {
        console.error('Error sending message:', err);
        let botMsg: any = {
          isUser: false,
          text: 'Something went wrong, Please contact support team.',
          error: true,
          time: new Date()
        };
        this.newMessage.emit(botMsg);
        this.loading = false;
      }
    });


  }
  viewImage(message: any) {
    const Url = this.chatService.apiUrl + 'view_pdf?file_path=' + (message.metadata.image );
    this.selectImage = {
      url: Url,
    };
    this.imageUrl = Url;
    // this.imageUrl = "http://localhost:4200/assets/fake.png"
    this.showViewer = true;

  }
  closeViewer(){
    this.showViewer = false;
    this.imageUrl = "";
  }
}