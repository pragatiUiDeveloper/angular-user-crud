import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  baseUrl: string ='api';
  url: string ='carsModel';
  params: string[] = ['param1','param2'];
  CarsModel: string = 'Cars Model';

  constructor() { }

  ngOnInit() {
  }

  functionInParent(message:string):void {
    console.log(message);
    console.log('I am in cars component')
  }

}
