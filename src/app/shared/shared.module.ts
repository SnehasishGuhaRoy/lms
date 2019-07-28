import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  exports:[BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
