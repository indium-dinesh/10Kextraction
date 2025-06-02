import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // public apiUrl =  'http://52.66.246.248:8000/'; // Replace with your actual API URL
  public apiUrl =  'http://' +window.location.hostname+ ':8000'+'/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {
    console.log('ChatService initialized'); 
    console.log('Ip', window.location.hostname); 
    console.log('apiUrl', this.apiUrl); 
  } 

  sendMessage(message: string): Observable<any> {
    
    return this.http.post(this.apiUrl + 'ask', {query: message});
    // return this.http.get('assets/mocks/ask2.json');
  }

  getChatHistory(): Observable<any[]> {
    // Mock chat history
    const mockHistory = [
      { id: 1, message: 'Hello!', response: '<p>Hi there!</p>' },
      { id: 2, message: 'How are you?', response: '<p>I am fine, thank you!</p>' }
    ];

    return of(mockHistory).pipe(
      delay(500), // Simulate API delay
      catchError(this.handleError('getChatHistory', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  viewPDF(url: string){
    // return this.http.post(this.apiUrl+'?viewpdf', { responseType: 'blob' });
    // return this.http.get(this.apiUrl+'/viewpdf?file_path', { responseType: 'blob' });
    return this.http.get('/assets/mocks/FORD.pdf', { responseType: 'blob' });
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl + 'upload-pdf', formData, {observe: 'response', responseType: 'text'}) ;
  }
}