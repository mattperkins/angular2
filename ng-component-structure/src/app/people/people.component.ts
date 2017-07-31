import { Component } from '@angular/core';


@Component({
  selector: 'people',
  template: `
  <h1>{{title}}</h1>
`,
styleUrls: ['./people.component.sass']
})

export class PeopleComponent {
  title = 'power to the people!!';
}
