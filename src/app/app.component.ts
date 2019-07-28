import { Component } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

 
@Injectable()
export class AppComponent {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  id = 'user';

  person = {
    name: "Obaseki Nosa",
    location: "Lagos",
};

  public addStudent(): void {
    const awesomenessLevel: string = this.id;
    console.log(awesomenessLevel);
    this.storage.set(awesomenessLevel,JSON.stringify(this.person));
}

  printStuden() : void {
    console.log(this.storage.get('user'));
  }

  deleteStuden() : void {
    window.localStorage.removeItem('user');
  }

};


