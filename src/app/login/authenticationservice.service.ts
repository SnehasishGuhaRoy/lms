import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {


  constructor(private firestore: AngularFirestore) { }

  FetchCredentials(username : String ,password : String) {
    // let username = this.firestore.collection('logindetails', ref => ref.where("username", "==", true));

    // let password = this.firestore.collection('logindetails', ref => ref.where("password", "==", true));

    // let user = this.firestore.collection('logindetails', ref => ref.where("username", "==",username))
    // .valueChanges().subscribe(
    //   data =>
    //   {
    //     console.log(data)
      
     // }
   // );
    



  //}

}

authenticatecredentials(userName:string,password:string): Observable<Boolean> {
  return new Observable(sub => {
    this.firestore
      .collection("studentLogin", ref => ref.where("UserName", "==", userName).where("Password","==",password))
      .valueChanges().subscribe(x => { 
        console.log(x);
        sub.next(x && x.length > 0);
        sub.complete();
      });
  });
}

}


