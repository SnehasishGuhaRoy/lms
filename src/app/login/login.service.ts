import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentModule } from '../Students/student/student.module';

@Injectable({
  providedIn: StudentModule
})
export class LoginService {

  constructor(private fireStore : AngularFirestore) { }

  addCredential(credential : any){
    this.fireStore.collection('studentLogin').add(credential);
  }
 
  authentication(credential: any){
  
    return this.fireStore
    .collection("studentLogin", ref => ref.where("capital", "==", true));
    
    /* return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
    .where('nameToSearch', '<=', searchValue + '\uf8ff'))
    .snapshotChanges() */
  }
}
