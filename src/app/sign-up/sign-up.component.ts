import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* import { MustMatch } from './_app/must-match.validator'; */


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  SignUpForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.SignUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    /*{
      validator: MustMatch('password', 'confirmPassword')
    }*/
    );
  }


get f() { return this.SignUpForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.SignUpForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.SignUpForm.value))
    }
}

