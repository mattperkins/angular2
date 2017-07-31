// ng imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// custom comps
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { ClickComponent } from './click.component';

//
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, ClickComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
