import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'repeatCapitalize'})
export class RepeatCapitalizePipe implements PipeTransform {
  transform(value: string, times: number = 1): string {
    let resultString: string;

    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw new Error('Value should be a string');
    }

    resultString = value[0].toUpperCase() + value.slice(1);

    return resultString.repeat(times);
  }
}
