import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/AppComponent';
import { MainComponent } from './components/main/MainComponent';
import { AdminComponent } from './components/admin/AdminComponent';
import { TodoComponent } from './components/todo/TodoComponent';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'admin', component: AdminComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}