import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CrudService } from 'src/app/Students/serivces/StudentCRUD.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUp: FormGroup;

  constructor(public fb: FormBuilder, public service: CrudService) {

    this.signUp = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phoneNo': [null, Validators.compose([Validators.required, Validators.pattern('/(6|7|8|9)\d{9}/')])],
      'subject': [null, Validators.required],
      'class': [null, Validators.required],
      'languageKnnown': [null, Validators.required],
      'location': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(30)])]
    })

  }


  addStudent() {
    this.service.addStudent(this.signUp.value);
  }

  ngOnInit() {}

}