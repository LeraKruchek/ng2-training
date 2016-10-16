import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: 'color'})
export class ColorPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any, arg1: number): any {
    let color = '#' + Math.random().toString(16).slice(2, 8);

    if (!value) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml('<span style="color:' + color + '">' + String(value).repeat(arg1) + '</span>');
  }
}
