import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutofocusModule } from 'angular-autofocus-fix';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CKEditorModule } from 'ng2-ckeditor';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CronEditorModule } from "cron-editor";
import { TimezonePickerModule } from 'ng2-timezone-selector';
import { NgxGraphModule } from "@swimlane/ngx-graph";
import { ContextMenuModule } from '@ctrl/ngx-rightclick';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    CKEditorModule,
    AutofocusModule,
    NgbModule,
    FilterPipeModule,
    CronEditorModule,
    TimezonePickerModule,
    NgxGraphModule,
    ContextMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModalModule
  ],
  exports: [
    TranslateModule,
    CKEditorModule,
    AutofocusModule,
    NgScrollbarModule,
    NgbModule,
    FilterPipeModule,
    CronEditorModule,
    TimezonePickerModule,
    NgxGraphModule,
    ContextMenuModule,
    AngularFireModule,
    NgbModalModule
  ]
})
export class ThirdPartyModule { }
