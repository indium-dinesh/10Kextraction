import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { HistoryComponent } from './history/history.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { LoaderComponent } from './loader/loader.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    ChatComponent,
    HistoryComponent,
    ChatWindowComponent,
    LoaderComponent,
    PdfViewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxExtendedPdfViewerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ChatModule { }
