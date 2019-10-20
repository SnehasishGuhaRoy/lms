import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { MatTableDataSource, MatSort } from '@angular/material';

const StudentList : Student[] =[{
  studentId: '1',
  firstName: 'Sreeparna',
  lastName: 'Chakraborty',
  email: 'eq@d.bnbv',
  phoneNo : 252882,
  subject: 'Maths',
  class: 'cvbc',
  languageKnnown: 'French',
  location: 'Kolkata'
},
{
  studentId: '2',
  firstName: 'Samik',
  lastName: 'Roy',
  email: 'eq@d.bnbv',
  phoneNo : 252882,
  subject: 'Maths',
  class: 'cvbc',
  languageKnnown: 'French',
  location: 'Birati'
}

];



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  {

  
  displayedColumns : string[]= ['studentId','firstName', 'lastName', 'email', 'phoneNo','subject','class','languageKnnown','location'];

 // dataSource = new MatTableDataSource(this.StudentArrList);
 dataSource = StudentList;

  

 // @ViewChild(MatSort, {static: true}) sort: MatSort;

  // ngOnInit() {
  //   this.dataSource.sort = this.sort;
  // }

}


  