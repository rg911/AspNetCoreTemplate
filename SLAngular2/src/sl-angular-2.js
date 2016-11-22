import {Component, View} from 'angular2/core';

@Component({
  selector: 'sl-angular-2'
})

@View({
  templateUrl: 'sl-angular-2.html'
})

export class SlAngular2 {

  constructor() {
    console.info('SlAngular2 Component Mounted Successfully');
  }

}
