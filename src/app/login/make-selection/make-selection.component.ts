import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-selection',
  templateUrl: './make-selection.component.html',
  styleUrls: ['./make-selection.component.scss']
})
export class MakeSelectionComponent implements OnInit {

  favoriteSeason : String;
  constructor(private router: Router,public modalRef: MatDialogRef<MakeSelectionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSelect(){
    if (this.favoriteSeason = 'Student'){
        this.modalRef.close();
        this.router.navigate(['/login/signUp']);
    }
    if (this.favoriteSeason = 'Teaacher'){

    }
  }

  close(){
    this.modalRef.close();
  }

}
