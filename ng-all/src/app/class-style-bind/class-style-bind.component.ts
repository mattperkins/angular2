import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'classStyleBind',
  template: `
  <h1>this is classStyleBind</h1>

  <button class="my-btn" [class.extraclass]="someProperty">Call to action</button>

  <button class="my-btn" [style.border]="someProperty ? '5px solid yellow' : 'none'">Actionay</button>
  <br><br>

  `,

  styles: [`
  .my-btn { font-size: 1.7em; }
  .extraclass { background: black; color: white; }
  `]

})
export class ClassStyleBindComponent {

  someProperty = true;

}
