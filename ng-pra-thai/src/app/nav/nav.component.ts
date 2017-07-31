import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  navs = [
    {link: "Home"},
    {link: "Menu"},
    {link: "Location"},
    {link: "Contact"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
