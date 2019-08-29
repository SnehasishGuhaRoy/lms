import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from 'src/app/model/Student';
import { StudentModule } from '../student/student.module';


@Injectable({
  providedIn: StudentModule
})
export class CrudService {

  static count: number = 0;
  constructor(private fireStore: AngularFirestore) { }

  studentsList: Student[];
  id = 'user';

  addStudent(data: Student) {
    return this.fireStore.collection('students').add(data)
    .then(() =>{
      this.fireStore.collection('students').add(data);
    });
  }

  getStudents() {
    return this.fireStore.collection('students').snapshotChanges();
  }

}

