import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AdminComponent} from 'src/app/login/admin/admin.component';



const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'signUp',
        component: SignUpComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
