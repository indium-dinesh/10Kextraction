import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { NotFoundComponent } from "./404/404.component";

@NgModule({
  declarations: [
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule

  ],
  exports:[
    NotFoundComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }