import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  // templateUrl: './two.component.html',
  // styleUrls: ['./two.component.css']
  template: `
  <!-- <img src="http://placehold.it/200"> -->
  <!-- 3 ways to bind an image -->
  <img [src]="image2Url" (click)='imgClick($event)'>

  <img bind-src="imageUrl">
  <img src="{{imageUrl}}">

  <!-- event binding -->
  <img [src]="image3Url" on-mouseover='imgMouseEvents()'>


  <input [value]='myMethod()'>


  <input (keyup)='userInput($event)'>

  <p>{{ myType }}</p>

  `
})
export class TwoComponent {
  myType = '';

  imageUrl = 'http://placehold.it/50';
  image2Url = 'http://placehold.it/150';
  image3Url = 'http://placehold.it/180';

  myMethod() {
    if (1 < 2) {
      return 'lemon';
    } else {
      return 'lime';
    }
  }

  imgClick(event:any) {
    console.log('hello world!');
  }

  imgMouseEvents(event:any) {
    console.log('that was a mouse hover!');
  }

  userInput(event:any) {
    this.myType = event.target.value;
  }

}
