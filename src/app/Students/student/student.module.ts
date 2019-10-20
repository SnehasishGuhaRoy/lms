import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from 'src/app/shared/library/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayStudentsComponent } from '../display-students/display-students.component';
import { StudentRoutingModule } from '../student-routing/student-routing.module';
import { StudentProfileComponent } from '../student-profile/student-profile.component';


@NgModule({
  declarations: [DisplayStudentsComponent, StudentProfileComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    SharedModule,
    MaterialModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
