import { Component } from '@angular/core';

@Component({
  selector: '[attributeselector]',
  templateUrl: './attributeselector.component.html',
  styles: [`
    button:focus {
      outline: none;
    }
  `]
})
export class AttributeSelectorComponent  {
  serverId=10;
  serverOffline=true;
  serverOnline=false;
  serverCreation="No server";
  inputFill="Replace this text";
  
  wizard(){
    if (this.serverOnline = true){
     return 'Server up'
    } else {
      return 'Server Down';
    }
  }

  serverSwitcher = false;
  newWord = "wait for it...";

constructor(){
  setTimeout(() => {
    this.serverSwitcher = true;
  }, 5000);
  setTimeout(() => {
    this.newWord = 'BOOOOOOOOOMMMMM!!!!!';
  }, 8000);
}

  onServerCreation(){
    this.serverCreation = 'Server was created';
  }

  inputGo(event: Event){
    this.inputFill = (<HTMLInputElement>event.target).value;
  }

}
