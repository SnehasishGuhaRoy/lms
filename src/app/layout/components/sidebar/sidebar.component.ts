import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    public swMenu: string;
    public swMenuReport: string;
    public openWorkFlowSubMenu: string;
    public swMenutargetConfiguration: string;
    public loginType;
    public radioList;
    public studentList = [{
        name: "Profile",
        routerLink: "/home/student/profile"
    },
    {
        name: "Search Teacher",
        routerLink: "/home/student/SreachTeacher"
    }];
    public tacherList = [{
        name: "Profile",
        routerLink: "/TeacherProfile"
    },
    {
        name: "Request List",
        routerLink: "/StudentRequest"
    }];

    constructor(public route: Router) { }

    ngOnInit() {
        this.showMenu = '';
        this.swMenu = '';
        this.swMenuReport = '';
        this.openWorkFlowSubMenu = '';
        this.swMenutargetConfiguration = '';
        this.loginType = localStorage.getItem('loginType');
        if (this.loginType = 'Student') {
            this.radioList = this.studentList;
        }
        else {
            this.radioList = this.tacherList;
        }
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    routingLink(item: any) {
        this.route.navigate([item.routerLink]);
    }

    quaryConfigurationExpand(element: any) {
        if (element === this.swMenu) {
            this.swMenu = '0';
        } else {
            this.swMenu = element;
        }
    }

    targetConfigurationExpand(element: any) {
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
