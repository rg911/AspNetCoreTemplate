import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {SlAngular2} from 'sl-angular-2';

@Component({
  selector: 'main'
})

@View({
  directives: [SlAngular2],
  template: `
    <sl-angular-2></sl-angular-2>
  `
})

class Main {

}

bootstrap(Main);
