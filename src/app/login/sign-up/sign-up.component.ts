import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CrudService } from 'src/app/Students/serivces/StudentCRUD.service';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUp: FormGroup;
  ut:string;

  constructor(public fb: FormBuilder, public service: CrudService, 
    public loginService: LoginService,
    activeRoute:ActivatedRoute , router:Router
    ) {

     this.ut=activeRoute.snapshot.queryParamMap.get('type');
      this.ut=this.ut && this.ut.toLocaleUpperCase()=='STUDENT' ? 'STUDENT':'TEACHER';
    let loginDetails: FormGroup = fb.group({
      'UserName': [null, Validators.required],
      'Password': [null, Validators.required]
    });

    let studentDetails: FormGroup = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phoneNo': [null, Validators.compose([Validators.required/* , Validators.pattern('/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/') */])],
      'subject': [null, Validators.required],
      'class': [null, Validators.required],
      'languageKnnown': [null, Validators.required],
      'location': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(30)])]
    });


    let teacherDetails: FormGroup = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phoneNo': [null, Validators.compose([Validators.required/* , Validators.pattern('/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/') */])],
    });

    this.signUp = fb.group({
      login: loginDetails,
      details: this.ut === 'TEACHER' ? teacherDetails : studentDetails
    });

  }


  addStudent() {
    console.log("inside Add");
    if (this.signUp.valid) {
      console.log("Inside valid");
      this.service.addStudent(this.signUp.value);
    }
  }

  onClose() {
    this.router.navigate(['/login']);
  }
  ngOnInit() { 

  }

}
