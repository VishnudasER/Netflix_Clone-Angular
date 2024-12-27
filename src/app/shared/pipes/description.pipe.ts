import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value.substring(0 , 140)}...`
  }

}
