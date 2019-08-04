import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUp : FormGroup;

  constructor(public fb: FormBuilder) { 
 
    this.signUp = fb.group({
      'studentId': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required,Validators.email])],
      'phoneNo' : [null,Validators.compose([Validators.required,Validators.pattern('/(6|7|8|9)\d{9}/')])],
      'subject': [null,Validators.required],
      'class': [null,Validators.required],
      'languageKnnown': [null, Validators.required],
      'location': [null, Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(30)])]
    })

  }

  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

  ngOnInit(){}

}
