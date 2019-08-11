import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { SnackNotificationComponent } from './snack-notification/snack-notification.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, 
        SidebarComponent, SnackNotificationComponent]
})
export class LayoutModule {}
