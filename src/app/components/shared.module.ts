import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { HistoryComponent } from "./history/history.component";
import { ChatWindowComponent } from "./chat-window/chat-window.component";
import { LoaderComponent } from "./loader/loader.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { PdfViewerComponent } from "./pdf-viewer/pdf-viewer.component";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";

@NgModule({
  declarations: [
    ThemeToggleComponent,
    HistoryComponent,
    ChatWindowComponent,
    LoaderComponent,
    PdfViewerComponent
  ],
  exports: [
    ThemeToggleComponent,
    HistoryComponent,
    ChatWindowComponent,
    LoaderComponent,
    PdfViewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }