import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { DisplayStudentsComponent } from '../display-students/display-students.component';
import { MaterialModule } from 'src/app/shared/library/material.module';


@NgModule({
  declarations: [DisplayStudentsComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,
    MaterialModule
  ]
})
export class StudentModule { }
