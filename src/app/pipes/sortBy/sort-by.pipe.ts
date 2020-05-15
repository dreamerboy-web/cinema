import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, by: string) {
    if (by === 'asc') {
      return value.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (by === 'desc') {
      const arr = value.sort((a, b) => {
        return b.id - a.id;
      });
      return arr;
    } else {
      const arr = value.sort((a, b) => {
        return b.id - a.id;
      });

    }

  }

}
