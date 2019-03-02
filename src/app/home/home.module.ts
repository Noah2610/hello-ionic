import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { MyComponentComponent } from '../my-component/my-component.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoEntryComponent } from '../todo-entry/todo-entry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, MyComponentComponent, TodoListComponent, TodoEntryComponent]
})
export class HomePageModule {}
