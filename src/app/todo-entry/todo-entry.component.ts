import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss'],
})
export class TodoEntryComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
    console.log("TODO ENTRY", cordova);
  }

}
