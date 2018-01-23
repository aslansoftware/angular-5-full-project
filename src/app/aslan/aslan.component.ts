import { Component ,OnInit} from '@angular/core';
import {AslanService} from './aslan.service';
import {IAslan,IFood} from './aslan';
import {AslanModel} from './aslan.models';
import { SidebarService } from '../data.service';

import {Type} from './type';

@Component({
  templateUrl: './aslan.component.html',
  styleUrls: ['./aslan.component.css']

})
export class AslanComponent implements OnInit {
  public pageTitle: string = 'Aslan Component Hello';
  public listTitle: string = 'Aslans List';

  pages: any[] = [{'name': 'usd', 'value': 3.14}, {'name': 'euro', 'value': 4.18}];
  model = new AslanModel('','Check State Waa','Working as Full Stack Developer');

  aslansList: IAslan[] = [];
  foodsList: IFood[] = [];
  errorMessage: string;

  type: number = 0;

  selectedType: Type;

  types = [
    new Type(1, 'nis' ),
    new Type(4.18, 'euro' ),
    new Type(3.48, 'usd' ),
  ];
  constructor(private _aslanService: AslanService, private sidebarService: SidebarService) {
    this.type = this.isSidebarVisible;
    console.log("this.type",this.type);
    this.selectedType = this.types[0];

  }

  get isSidebarVisible(): any {
    return this.sidebarService.isSidebarVisible;
  }

  toggleSidebar($event) {
    $event.preventDefault();
    console.log($event.target.value);
    this.sidebarService.toggleSidebarVisibilty($event.target.value);
  }

  // onInput($event) {
  //   $event.preventDefault();
  //   console.log('selected: ' + $event.target.value);
  //   this._data.changeType($event.target.value);
  // }
  //
  // get getType(): any {
  //   return this._data.type;
  // }
  ngOnInit(): void {
    this._aslanService.getAslans()
      .subscribe(aslansList => {
          this.aslansList = aslansList;
        },
        error => this.errorMessage = <any>error);

    this._aslanService.getFoods()
      .subscribe(foodList => {
          this.foodsList = foodList;
        },
        error => this.errorMessage = <any>error);
  }
}
