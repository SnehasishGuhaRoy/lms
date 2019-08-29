import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-selection',
  templateUrl: './make-selection.component.html',
  styleUrls: ['./make-selection.component.scss']
})
export class MakeSelectionComponent implements OnInit {

  makeSelection : String;
  constructor(private router: Router,public modalRef: MatDialogRef<MakeSelectionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSelect(){
    if (this.makeSelection = 'Student'){
        this.modalRef.close();
        this.router.navigate(['/login/signUp']);
    }
    if (this.makeSelection = 'Teaacher'){

    }
  }

  close(){
    this.modalRef.close();
  }

}
