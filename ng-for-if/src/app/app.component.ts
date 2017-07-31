import { Component } from '@angular/core';

export class People {
  id: number;
  name: string;
  membership: string;
}

const PEOPLES: People[] = [
  {
    id: 1, name: 'Fred', membership: 'pro'
  },
  {
    id: 2, name: 'Amy', membership: 'gold'
  },
  {
    id: 3, name: 'Lemon', membership: 'silver'
  },
  {
    id: 4, name: 'Lime', membership: 'bronze'
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  peoples = PEOPLES;
}
