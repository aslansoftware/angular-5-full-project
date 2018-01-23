import { Pipe, PipeTransform } from '@angular/core';

import {IAslan} from './aslan';


@Pipe({
  name: 'myfilter',
  pure: false
})

export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: IAslan): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.aslanDescription.indexOf(filter.aslanName) !== -1);

  }
}


