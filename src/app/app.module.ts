import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './components/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from './main-layout/side-bar/side-bar.component';
import { ChatModule } from './components/chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ChatModule
    
  ],
  bootstrap: [AppComponent],
  exports: [MainLayoutComponent, SideBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
