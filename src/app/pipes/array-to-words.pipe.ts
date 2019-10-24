import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToWords'
})
export class ArrayToWords implements PipeTransform {

  transform(value: string | string[]): string {
    if (typeof value === 'string') {
      return value;
    }
    return value.join(', ');
  }

}
