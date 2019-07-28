import { Component,  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DashboardTableDataSource, DashboardTableItem } from './dashboard-table-datasource';
  
export interface PeriodicTable{
  name: string;
  address:string;
  subject:string;
  registrationDate:string
}

const data : PeriodicTable[] =[
{name:"Samik", address:"Birati", subject:"DataStructure",registrationDate:"09/26/2019"},
{name:"Sreeparna", address:"Lansdowne", subject:"Mathematics",registrationDate:"09/26/2019"},
{name:"Souvick", address:"Howrah", subject:"Physics",registrationDate:"09/26/2019"},
{name:"Snehasish", address:"College Street", subject:"Programming",registrationDate:"09/26/2019"},
{name:"Samik", address:"Birati", subject:"DataStructure",registrationDate:"09/26/2019"}
];
@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DashboardTableItem>;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'address','subject','registrationDate'];
  mydatasource = data;

  ngOnInit() {
    //this.dataSource = new DashboardTableDataSource();
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
  }
}
