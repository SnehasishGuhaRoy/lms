import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './library/material.module';
import { ThirdPartyModule } from './library/third-party.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    MaterialModule,
    ThirdPartyModule
  ],
  exports:
    [CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      DragDropModule,
      MaterialModule,
      ThirdPartyModule
    ],
    providers: []
})
export class SharedModule { }
