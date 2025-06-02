import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements AfterViewInit {
  @Input() url: string = '';
  @Input() page: number = 1;
  @Input() searchText: string = '';
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.show = false;
    this.close.emit();
  }

  ngAfterViewInit() {
    // Add logic to scroll to page and highlight after view init
    // You can use PDF.js here for advanced control
  }
}
