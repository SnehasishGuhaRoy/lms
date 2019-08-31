import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
//import { AdminComponent } from 'src/app/login/admin/admin.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }

    //{
      //  path:'admin',
      //  component:AdminComponent
    //}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
