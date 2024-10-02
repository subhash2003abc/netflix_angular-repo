import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charcter'
})
export class CharcterPipe implements PipeTransform {

  transform(value:string , args?:number): any {
    return `${value.substring(0,args)}...`;
  }

}
