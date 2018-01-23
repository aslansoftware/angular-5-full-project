import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: number, args: string): any {
    if (args == "usd") {
      return value * 3.48;
    } else {
      return 10;
    }
  }
}
