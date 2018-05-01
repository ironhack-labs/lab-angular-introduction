import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let ac = '';
    value.split('').forEach(element => ac += '*');
    return ac;
  }

}
