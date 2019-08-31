import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/library/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignUpComponent } from "../login/sign-up/sign-up.component";
import { StudentModule } from '../Students/student/student.module';
import { ThirdPartyModule } from '../shared/library/third-party.module';
import {AdminComponent} from 'src/app/login/admin/admin.component';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        FormsModule,
        StudentModule,
        ThirdPartyModule,
        ReactiveFormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [SignUpComponent,
        LoginComponent, AdminComponent
        ]
})
export class LoginModule {}
