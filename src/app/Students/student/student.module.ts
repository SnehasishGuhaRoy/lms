import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from 'src/app/shared/library/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayStudentsComponent } from '../display-students/display-students.component';


@NgModule({
  declarations: [DisplayStudentsComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    SharedModule,
    MaterialModule
  ]
})
export class StudentModule { }
