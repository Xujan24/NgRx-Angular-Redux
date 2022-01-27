import { Pipe, PipeTransform } from '@angular/core';
import { Author } from 'src/interface/Author';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {

  transform(x: Author[], id: string): string {
    // console.log('AuthorNamePipe | x: %o, id: %s', x, id);
    if (!x) return "";
    const author = x.find(author => author.id === id);
    return (author) ? author.name : "Unknown";
  }

}
