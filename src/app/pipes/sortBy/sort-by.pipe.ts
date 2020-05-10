import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, by: string): unknown {
    if(by==='asc') {
      let arr = value.sort((a, b) =>{
        return a.data - b.data
      });
      return arr;
    } else if(by==='desc'){
      let arr = value.sort((a, b) =>{
        return b.data - a.data
      });
      return arr;
    } else {
      let arr = value.sort((a, b) =>{
        return a.data - b.data
      });
      return arr;
    }

  }

}
