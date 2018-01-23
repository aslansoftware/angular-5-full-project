import { Component } from '@angular/core';
import {Pizza } from './pizza';
import {PizzaModel} from './pizza.model';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

  model = new PizzaModel('', 0 , '', '', 0 );

  public ListOfPizzas: Pizza[] = [ {
    'name': 'Regular',
    'size': 1,
    'description': 'Regualr Pizza',
    'type': 'Full Size',
    'price': 33
  }, {
    'name': 'Regular',
    'size': 1,
    'description': 'Regualr Pizza',
    'type': 'Full Size',
    'price': 33
  }, {
    'name': 'Regular',
    'size': 1,
    'description': 'Regualr Pizza',
    'type': 'Full Size',
    'price': 33
  }, {
    'name': 'Regular',
    'size': 1,
    'description': 'Regualr Pizza',
    'type': 'Full Size',
    'price': 33
  },
    {
      'name': 'Regular',
      'size': 1,
      'description': 'Regualr Pizza',
      'type': 'Full Size',
      'price': 33
    },
    {
      'name': 'Regular',
      'size': 1,
      'description': 'Regualr Pizza',
      'type': 'Full Size',
      'price': 33
    }, {
    'name': 'Olives',
    'size': 1,
    'description': 'Olives Pizza',
    'type': 'Full Size',
    'price': 44
  }, {
      'name': 'Olives',
      'size': 1,
      'description': 'Olives Pizza',
      'type': 'Full Size',
      'price': 44
    },
    {
      'name': 'Olives',
      'size': 1,
      'description': 'Olives Pizza',
      'type': 'Full Size',
      'price': 44
    }, {
    'name': 'Cheese',
    'size': 2,
    'description': 'Regualr Pizza',
    'type': 'Full Size',
    'price': 44
  }, {
      'name': 'Cheese',
      'size': 2,
      'description': 'Regualr Pizza',
      'type': 'Full Size',
      'price': 44
    }, {
      'name': 'Cheese',
      'size': 2,
      'description': 'Regualr Pizza',
      'type': 'Full Size',
      'price': 44
    }, {
      'name': 'Cheese',
      'size': 2,
      'description': 'Regualr Pizza',
      'type': 'Full Size',
      'price': 44
    }, {
      'name': 'Cheese',
      'size': 2,
      'description': 'Regualr Pizza',
      'type': 'Full Size',
      'price': 44
    }];
  private pizzaListData = [
    {
      'pizzaID': 1,
      'name': 'First',
      'listOfPizzas': this.ListOfPizzas
    }
  ];

  addGroup(key, value) {
    return { 'key': key, 'value': value };
  }
  /** Transforms an array of arrays into an array of grouped objects
   *
   * @param {Array} list - The array of arrays to tranform into groups.
   * @param {int} groupByIndex - The index of the element to group on.
   */
  groupArrayBy(list, groupByIndex) {
    // create a map to hold groups with their corresponding results
    const map = new Map();
    list.forEach((item) => {
      const key = item[groupByIndex];
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
    });

    // convert map back to a simple array of objects
    const groups: { 'key', 'value' }[] = Array.from(map, x => this.addGroup(x[0], x[1]) );

    // output groups to the console for demostration
    console.log('map = ', map);
    console.log('groups = ', groups);

    return groups;
  }


  buildArr(theArr: String[]): String[][] {

    const grouppedArray: { 'key', 'value' }[] = this.groupArrayBy(theArr, 'name');

    const arrOfarr = [];
    for ( let i = 0; i < grouppedArray.length ; i += 4 ) {
      const row = [];

      for ( let x = 0; x < 4; x++) {
        const value = grouppedArray[i + x];
        if (!value) {
          break;
        }
        row.push(value);
      }
      arrOfarr.push(row);
    }
    return arrOfarr;
  }
}
