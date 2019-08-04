import { Injectable, Inject } from '@angular/core';
import { Student } from 'app/model/Student';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  studentsList : Student[];
  id = 'user';

  /* addStudent(data : Student){
    this.fireStore.collection('students').add(data);
  }

  getStudent(){
    return this.fireStore.collection('students').snapshotChanges();
  } */
  
  
  addStudent(data : Student){
  }

  getStudent(){
    return [{}];
  }


}

