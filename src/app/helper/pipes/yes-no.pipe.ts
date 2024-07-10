import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo',
  standalone: true
})
export class YesNoPipe implements PipeTransform {

  transform(value: string | boolean): string | boolean{
    return value? 'მარაგშია' : 'მარაგი ამოიწურა';
  }

}
