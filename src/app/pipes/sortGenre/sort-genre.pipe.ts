import { Pipe, PipeTransform } from '@angular/core';
import {filter} from 'rxjs/operators';

@Pipe({
  name: 'sortGenre'
})
export class SortGenrePipe implements PipeTransform {

  transform(value: any, by: string) {
    // tslint:disable-next-line:no-conditional-assignment
    if (by === 'Усі'){
      return value;
    }else {
      const needed = [];
      value.filter(film => {
        film.genre.filter(inArr => {
          if (inArr.nameOfGenre === by) {
            needed.push(film);
          }
        });
      });


      return needed;
    }
  }

}
