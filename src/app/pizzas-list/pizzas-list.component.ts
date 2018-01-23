import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../home/pizza';

@Component({
  selector: 'pm-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.css']
})
export class PizzasListComponent implements OnInit {

  public typeOfPizza: string = '';
  public numberOfSlicesCollection: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  public typesOfPizzas: [['Olive', 'Regular', 'Cheese'] , ['Tomato', 'Circassian Cheese', 'Spice']];

  numOfSlices: number;


  constructor() {
  }

  ngOnInit() {
  }

  public setSlicesNumber(number) {
    this.numOfSlices = number;
  }
  private setTypeOfPizza(typeOfPizza) {
    this.typeOfPizza = typeOfPizza;
  }

}
