import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { Car } from '../car';
import { UserService } from '../user.service';
import { CarsService } from '../cars.service';

 //for lazyloading 
import {LazyLoadEvent} from 'primeng/primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cars: Car[];
  users: User[];
  cols: any[];

  baseUrl2: string ='api';
  url2: string ='usersModel';
  UsersModel: string = 'Users Model';

  //for lazyloading 
  datasource: Car[];
  loading: boolean;
  totalRecords: number;

  constructor(private userService: UserService, private carsService: CarsService) { }

  ngOnInit() {
    this.getUsers();
    this.getCars();
    this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'colour', header: 'Colour' }
        ];
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  getCars(): void {
    this.carsService.getCars()
    .subscribe(cars => {
      this.cars = cars;

      //for lazyloading
      this.datasource = cars;
      this.totalRecords = this.datasource.length;
    } );
  }

      loadCarsLazy(event: LazyLoadEvent) {
        this.loading = true;

        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.cars = this.datasource.slice(event.first, (event.first + event.rows));
                this.loading = false;
            }
        }, 1000);
    }

}
