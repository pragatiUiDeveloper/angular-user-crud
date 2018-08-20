import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { Car } from '../car';
import { UserService } from '../user.service';
import { CarsService } from '../cars.service';

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
    .subscribe(cars => this.cars = cars);
  }

}
