import { Injectable } from '@angular/core';

import { File } from '@ionic-native/file';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  public entries: string[];

  constructor() {
    this.entries = [
      'one',
      'two',
      'three',
      'four',
      'five'
    ];
  }
}
