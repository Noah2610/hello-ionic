import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent implements OnInit {

  @Input() inner: string;

  constructor() { }

  ngOnInit() { }

}
