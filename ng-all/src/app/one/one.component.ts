import { Component } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-one',
  template: '<h1>{{ title }}</h1>',
  // providers: [ExampleService]
})

export class OneComponent {
  // title = 'wassssssuuupppp!!!';
  title: string;

  constructor(private _exampleService: ExampleService) {

  }

  ngOnInit() {
    this.title = this._exampleService.someMethod();
  }

}
