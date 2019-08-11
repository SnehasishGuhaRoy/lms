import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  studentList : string;
  student : Student[];
  id = 'user';

  public addStudent(input :Student): void {
    this.studentList = this.storage.get(this.id);
    this.student = JSON.parse(this.studentList);
    if (this.student != null){
      this.student.push(input);
      this.storage.set(this.id,JSON.stringify(this.student));
    }
    else{
      this.storage.set(this.id,JSON.stringify(this.student));
    }
}

  getStudents() : Student[] {
    return(JSON.parse(this.storage.get(this.id)));
  }

  editStudent(input :Student) : void {
    this.student = JSON.parse(this.storage.get(this.id));

    for (var i in this.student){
      if(this.student[i].studentId == input.studentId ){
        this.student[i] = input;
        break;
      }
    }
    localStorage.removeItem(this.id);
    this.storage.set(this.id,JSON.stringify(this.student));
  }

  deleteStudent(studentRoll) : void {
    this.student = JSON.parse(this.storage.get(this.id));
    var newList = this.student.filter((list => list.studentId != studentRoll));
    this.storage.set(this.id,JSON.stringify(newList));
  }
}

