import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    public swMenu: string;
    public swMenuReport: string;
    public openWorkFlowSubMenu : string;
    public swMenutargetConfiguration  :string;


    constructor() {}

    ngOnInit() {
        this.showMenu = '';
        this.swMenu = '';
        this.swMenuReport='';
        this.openWorkFlowSubMenu='';
        this.swMenutargetConfiguration='';

    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    quaryConfigurationExpand(element: any) {
        if (element === this.swMenu) {
            this.swMenu = '0';
        } else {
            this.swMenu = element;
        }
    }

    targetConfigurationExpand(element : any){
        if (element === this.swMenutargetConfiguration) {
            this.swMenutargetConfiguration = '0';
        } else {
            this.swMenutargetConfiguration = element;
        }
    }

    reportConfigurationExpand(element: any) {
        if (element === this.swMenuReport) {
            this.swMenuReport = '0';
        } else {
            this.swMenuReport = element;
        }
    }

    workFlowExpand(element: any) {
        if (element === this.openWorkFlowSubMenu) {
            this.openWorkFlowSubMenu = '0';
        } else {
            this.openWorkFlowSubMenu = element;
        }
    }
}
