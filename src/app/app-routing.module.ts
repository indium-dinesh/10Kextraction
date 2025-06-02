import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotFoundComponent } from './components/404/404.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        { path: '', redirectTo: '/chat', pathMatch: 'full' },

      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path:'quantitative-analysis',
        component: NotFoundComponent
      },
      {
        path:'portfolio-optimization',
        component: NotFoundComponent
      },
      {
        path:'portfolio-construction',
        component: NotFoundComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
