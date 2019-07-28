import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';





const routes: Routes = [

{path:'Default', component:DefaultComponent},
{path:'DisplayData', component:DashboardTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

