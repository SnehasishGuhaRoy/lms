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
   // this.fireStore.collection("studentLogin").wh
    /* where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    }); */
  }
}
