import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
  <header>
  <h1>{{title}}</h1>
  </header>
`
})

export class HeaderComponent {
  title = 'get a head start';
}
