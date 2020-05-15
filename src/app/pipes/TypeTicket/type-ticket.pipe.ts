import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeTicket'
})
export class TypeTicketPipe implements PipeTransform {

  transform(value: number, typePipe: string)  {
    if (typePipe === 'Повний') { return value + ' грн.'; }
    if (typePipe === 'Студентський') { return value * 0.7 + ' грн.'; }
    if (typePipe === 'Дитячий') { return value * 0.5 + ' грн.'; }
  }

}
