import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mesaurement'})
export class MesaurementPipe implements PipeTransform {
  transform(value: number, args: string): number {
    if (args === 'usd') {
      return value * 3.48;
    } else if (args === 'euro') {
      return value * 4.18;
    } else if ( args === 'nis') {
      return value;
    }
  }
}
