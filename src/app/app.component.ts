import { Component } from '@angular/core';
import randomString from 'random-string';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { Book } from 'src/interface/Book';
import { Author } from 'src/interface/Author';

import * as StateActions from 'src/store/state.actions';
import * as StateSelectors from 'src/store/state.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // book attributes
  bookTitle: string | null = null;
  selectedBookCategory: string | null = null;
  authorId: string | null = null;

  // list of book categories
  bookCategories: string[] = ["Academic", "Fiction", "Mystery", "Religion", "Science"];

  // authorAtributes
  authorName: string | null = null;

  // select lists of book and author from current state
  books$: Observable<{ [key: string]: Book }> = this.store.select(StateSelectors.selectBooks);
  authors$: Observable<{ [key: string]: Author }> = this.store.select(StateSelectors.selectAuthors);

  // add new book;
  addBook() {
    if (!this.bookTitle || !this.selectedBookCategory || !this.authorId) {
      console.error('onAddBook() | Can\'t dispatch the "addBook" action. Missing some values.');
      return;
    }
    // create new Book object;
    const book: Book = {
      id: randomString({ length: 4 }).toLowerCase(),
      title: this.bookTitle,
      category: this.selectedBookCategory,
      authorId: this.authorId
    };

    // dispatch "addBook" action to add new book
    this.store.dispatch(StateActions.addBook({ book }));

    // reset values
    this.bookTitle = null;
    this.selectedBookCategory = null;
    this.authorId = null;
  }

  // remove book;
  removeBook(bookId: string) {
    this.store.dispatch(StateActions.removeBook({ bookId }));
  }

  // add author;
  addAuthor() {
    if (!this.authorName) {
      console.error('onAddAuthor() | Can\'t dispatch the "addAuthor" action. Missing authorName');
      return;
    }

    // create new Author object;
    const author: Author = {
      id: randomString({ length: 3 }).toLowerCase(),
      name: this.authorName
    }

    // dispatch "addAuthor" action to add new author
    this.store.dispatch(StateActions.addAuthor({ author }));

    // reset values
    this.authorName = null;
  }

  // remove author
  removeAuthor(authorId: string) {
    this.store.dispatch(StateActions.removeAuthor({ authorId }));
  } 

  constructor(
    private store: Store
  ) { }
}
