import { Component, OnInit } from '@angular/core';
import { CrudService } from '../serivces/StudentCRUD.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  studentDetails: any = null;
  details: FormGroup;
  isDisabled = true;

  constructor(public fb: FormBuilder, public cservice: CrudService) {

    this.cservice.getStudenByUserId(localStorage.getItem('Username'))
      .subscribe(data => {
        if (data) {

          this.studentDetails = data;
          console.log(this.studentDetails);

          this.details = this.fb.group({
            'firstName': [{ value: this.studentDetails[0].firstName, disabled:  this.isDisabled}],
            'lastName': [{ value: this.studentDetails[0].lastName, disabled: this.isDisabled }],
            'email': [{ value: this.studentDetails[0].email, disabled: this.isDisabled }],
            'phoneNo': [{ value: this.studentDetails[0].phoneNo, disabled: this.isDisabled }],
            'subject': [{ value: this.studentDetails[0].subject, disabled: this.isDisabled }],
            'class': [{ value: this.studentDetails[0].class, disabled: this.isDisabled }],
            'languageKnnown': [{ value: this.studentDetails[0].languageKnnown, disabled: this.isDisabled }],
            'location': [{ value: this.studentDetails[0].location, disabled: this.isDisabled }]
          });

        }
      });

  }

  ngOnInit() {
  }

  onEdit() {
    this.isDisabled = false;
    this.details.enable();
  }

  modifyStudent(){

  }

}
