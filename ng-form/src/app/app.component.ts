import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  post:any; // All fields form submitted form
  message:string='';
  messageAlert:string = 'Min 10 / Max 1400 characters'; 
  name:string = '';
  nameAlert:string = 'Min 3 character';
  email:string = '';
  emailAlert:string = 'Min 5 character including @';
  
  constructor(private fb: FormBuilder){

    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'email': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1400)])]
    });
  }

  addPost(post){
    this.message = post.message;
    this.name = post.name;
    this.email = post.email;
  }
}
