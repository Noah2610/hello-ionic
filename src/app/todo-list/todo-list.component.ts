import { Component, OnInit } from '@angular/core';

import { TodoEntryComponent } from '../todo-entry/todo-entry.component';

import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  entries: string[];

  constructor(private data: TodoDataService) { }

  ngOnInit() {
    this.entries = this.data.entries;
  }
}
