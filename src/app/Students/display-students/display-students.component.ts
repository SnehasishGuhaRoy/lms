import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.scss']
})
export class DisplayStudentsComponent implements OnInit {

  @Input()
  StudentArrList : Student[] =[{
    studentId: '10000',
    firstName: 'Souvick',
    lastName: 'Deyasi',
    email: 'eq@d.bnbv',
    phoneNo : 252882,
    subject: 'dfdsf',
    class: 'cvbc',
    languageKnnown: 'ggjhg',
    location: 'hkhkjk'
  }];

  list = [1,2,3];
  constructor() { }
  
  columnName : string[]= ['studentId','firstName', 'lastName', 'email', 'phoneNo','subject','class','languageKnnown','location'];

  dataSource = new MatTableDataSource(this.StudentArrList);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
