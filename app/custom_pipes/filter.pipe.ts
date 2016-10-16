import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'fruits'})
export class FruitPipe implements PipeTransform {
  transform(value: any) {
    return value.filter(v => v.isFruit);
  }
}

@Pipe({
  name: 'fruits_impure',
  pure: false
})
export class FruitPipeImpure extends FruitPipe {}
