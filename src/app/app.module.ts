import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { authorsReducer } from 'src/store/authors.reducers';
import { booksReducer } from 'src/store/books.reducers';

import { AppComponent } from './app.component';
import { ObjValuesPipe } from './pipes/obj-values.pipe';
import { AuthorNamePipe } from './pipes/author-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ObjValuesPipe,
    AuthorNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ books: booksReducer, authors: authorsReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
