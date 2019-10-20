import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CrudService } from '../Students/serivces/StudentCRUD.service';
import { MatDialog } from '@angular/material';
import { MakeSelectionComponent } from './make-selection/make-selection.component';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isAuth: boolean;

    login: FormGroup;
    typeControl: FormControl;
    itemsList = [{
        name: 'Student'
    },
    {
        name: 'Teacher'
    }];

    constructor(private router: Router, public fb: FormBuilder, public service: CrudService, public dialog: MatDialog, public loginService: LoginService) {

        this.typeControl = new FormControl("", Validators.required);

        this.login = fb.group({
            'Username': [null, Validators.required],
            'Password': [null, Validators.required],
            'typeControl': this.typeControl
        })
    }

    ngOnInit() { }

    onLogin() {
        // console.log(this.login.value);
        this.loginService.authentication(this.login.value.Username, this.login.value.Password)
            .subscribe(validate => {
                if (validate) {
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('Username',this.login.value.Username);
                    this.router.navigate(['/home/dashboard']);
                }
            });
    }

    signUp() {
        this.dialog.open(MakeSelectionComponent, {
            data: { 'itemsList': this.itemsList },
            disableClose: true
        });
    }
}
