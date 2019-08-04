import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student } from 'app/model/Student';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.scss']
})
export class DisplayStudentComponent implements OnInit {

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
