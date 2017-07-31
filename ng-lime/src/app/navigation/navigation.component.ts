import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


   navs = [
   {name: 'fred'},
   {name: 'Jane'},
   {name: 'Fruity'},
   ];

  constructor() { }


  




  ngOnInit() {
  }

}
