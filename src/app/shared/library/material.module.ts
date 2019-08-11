import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
      MatButtonModule,
      MatCardModule,
      MatIconModule, 
      MatTableModule,
      MatToolbarModule,
      MatButtonToggleModule,
      MatDialogModule,
      MatSelectModule, 
      MatCheckboxModule, 
      MatAutocompleteModule,
      MatListModule, 
      MatMenuModule, 
      MatSidenavModule,
      MatFormFieldModule,
      MatPaginatorModule, 
      MatInputModule,
      MatProgressSpinnerModule,
      MatSortModule,
      MatSnackBarModule
}from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTableModule} from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTreeModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    CdkTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    CdkStepperModule,
    MatStepperModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTreeModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatSortModule,
    CdkTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    CdkStepperModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
