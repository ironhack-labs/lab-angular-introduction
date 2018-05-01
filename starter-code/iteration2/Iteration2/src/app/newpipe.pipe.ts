import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipe',
  pure: false
})
export class NewpipePipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }

    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[field].match(myPattern));
  }

}
