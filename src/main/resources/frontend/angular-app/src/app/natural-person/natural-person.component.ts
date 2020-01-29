import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bk-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent implements OnInit {

  displayDialog: boolean;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[] = new Array();

  cols: any[];

  constructor() { }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    let car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    car = new Car();
    car.color = 'zolty';
    car.brand = 'brandaaaa';
    car.vin = 'vin11122';
    car.year = 1999;
    this.cars.push(car);

    car = new Car();
    car.color = 'ciemy';
    car.brand = 'brandaaaa';
    car.vin = 'vin1112233';
    car.year = 2000;
    this.cars.push(car);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

}

class Car {
  vin?: string;
  year?: number;
  brand?: string;
  color?: string;
}
