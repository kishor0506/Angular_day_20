import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "kishore";
  }

}
