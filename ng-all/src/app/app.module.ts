import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { ExampleService } from './example.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ClassStyleBindComponent } from './class-style-bind/class-style-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OneComponent,
    TwoComponent,
    ClassStyleBindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
   ],
  // providers: [],
  bootstrap: [AppComponent],
  providers: [ExampleService]
})
export class AppModule { }
