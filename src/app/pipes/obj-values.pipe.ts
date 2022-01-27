import { Pipe, PipeTransform } from '@angular/core';
import { Author } from 'src/interface/Author';
import { Book } from 'src/interface/Book';

@Pipe({
  name: 'objValues'
})
export class ObjValuesPipe implements PipeTransform {

  transform(x: {[key: string]: Book | Author} | null): any[] {
    return (x) ? Object.values(x) : []
  }

}
