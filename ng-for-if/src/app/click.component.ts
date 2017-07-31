import { Component } from '@angular/core';

export class Click {
  id: number;
  name: string;
  color: string;
}

const CLICKS: Click[] = [
  {
    id: 1, name: 'Foo', color: 'red'
  },
  {
    id: 2, name: 'Bar', color: 'yellow'
  },
  {
    id: 3, name: 'Baz', color: 'green'
  },
  {
    id: 4, name: 'Zoo', color: 'blue'
  },
]

@Component({
  selector: 'click',
  template: `
  <h2>ngFor and ngIf + click event</h2>
  <div *ngFor='let click of clicks'
  [class.selected]='click === selectedClick'
  (click)='myClick(click)'>
  <p>{{click.name}}</p>
  </div>

  <div *ngIf='selectedClick'>
    {{selectedClick.name}}'s favourite color is {{selectedClick.color}}
  </div>
  `,
  styles: [
    `
      .selected{
        color: white;
        background: red;
        padding: 5px 0;
      }
    `
  ]
})
export class ClickComponent {
  clicks = CLICKS;

  selectedClick: Click;

  myClick(click: Click): void {
    this.selectedClick = click;
  }
}
