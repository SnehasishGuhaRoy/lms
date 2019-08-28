import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../Students/serivces/StudentCRUD.service';
import { MatDialog } from '@angular/material';
import { MakeSelectionComponent } from './make-selection/make-selection.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login : FormGroup;

    
    itemsList = [{
        name : 'Student'
    },
    {
        name : 'Teacher'
    }];

    constructor(private router: Router,public fb: FormBuilder, public service: CrudService,public  dialog:  MatDialog) {

        this.login = fb.group({
            'Username':  [null,Validators.required],
            'Password':  [null,Validators.required]
        })
    }




    ngOnInit() {}

    onLogin() {
        console.log(this.login.value);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/home/dashboard']);
    }

     signUp(){
        this.dialog.open(MakeSelectionComponent,{
        width: '600px',
        data : {'itemsList': this.itemsList},
        disableClose : true
      });
    }
}
