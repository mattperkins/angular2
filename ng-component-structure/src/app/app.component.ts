import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <h1>{{title}}</h1>
  <people></people>
`,
styles: [
  `
    h1 {
      color: white;
      background: red;
    }
  `
]
})
export class AppComponent {
  title = 'lets go to work!';
}
