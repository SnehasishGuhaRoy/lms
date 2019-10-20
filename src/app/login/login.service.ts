import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentModule } from '../Students/student/student.module';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: StudentModule
})
export class LoginService {

  constructor(private fireStore: AngularFirestore) { }

  addCredential(credential: any): Observable<firebase.firestore.DocumentReference> {
    return from(this.fireStore.collection('studentLogin').add(credential));
  }

  authentication(userName:string,password:string): Observable<Boolean> {
    return new Observable(sub => {
      this.fireStore
        .collection("studentLogin", ref => ref.where("UserName", "==", userName).where("Password","==",password))
        .valueChanges().subscribe(x => {
          sub.next(x && x.length > 0);
          sub.complete();
        });
    });
  }
}
