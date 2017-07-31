import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <p>data from user.component template</p>
    <h2>
      {{fresh}}
    </h2>
  `

})
export class UserComponent {
  fresh = 'this is a selector from user.component';
}
