import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fireStore : AngularFirestore) { }

  addCredential(credential : any){
    this.fireStore.collection('studentLogin').add(credential);
  }

  authentication(credential: any){
  
    this.fireStore
    .collection("studentLogin", ref => ref.where("capital", "==", true));
     
  }
}
