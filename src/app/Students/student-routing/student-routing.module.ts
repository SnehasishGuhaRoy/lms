import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplayStudentsComponent } from '../display-students/display-students.component';
import { StudentProfileComponent } from '../student-profile/student-profile.component';

const route : Routes = [
  {
    path: 'profile', 
    component : StudentProfileComponent
  },
  {
    path : 'SreachTeacher',
    component : DisplayStudentsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
