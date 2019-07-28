import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { SharedModule } from './shared/shared.module';
=======
import { DefaultComponent } from './default/default.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
=======
    DefaultComponent,
    DashboardTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
     MatTableModule ,
    MatPaginatorModule,
    MatSortModule,MatCardModule
>>>>>>> Stashed changes
  ],
  exports:[
    MatTableModule,MatPaginatorModule,MatSortModule,MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
