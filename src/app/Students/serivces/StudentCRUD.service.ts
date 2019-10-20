import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Student } from 'src/app/model/Student';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  static count: number = 0;
  constructor(private fireStore: AngularFirestore) { }

  studentsList: Student[];
  id = 'user';

  addStudent(data: any): Observable<firebase.firestore.DocumentReference> {
    return from(this.fireStore.collection('students').add(data));
  }

  getStudents() {
    return this.fireStore.collection('students').snapshotChanges();
  }

  getStudenByUserId(userName: String): Observable<any[]> {

    return new Observable(sub => {
      this.fireStore
        .collection("students", ref => ref.where("UserName", "==", userName))
        .valueChanges().subscribe(x => {
          sub.next(x);
          sub.complete();
        });
    });
  }

}

