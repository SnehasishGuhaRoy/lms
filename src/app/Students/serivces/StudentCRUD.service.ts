import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from 'src/app/model/Student';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  static count:number=0;
  constructor(private fireStore : AngularFirestore) { }

  studentsList : Student[];
  id = 'user';

   addStudent(data : Student){
     data.studentId=String(++CrudService.count);
    this.fireStore.collection('students').add(data);
  }

  getStudents(){
    return this.fireStore.collection('students').snapshotChanges();
  }

}

