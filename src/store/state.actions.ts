import { createAction, props } from "@ngrx/store";
import { Book } from "src/interface/Book";
import { Author } from "src/interface/Author";

export const addBook = createAction(
    'Add New Book',
    props<{book: Book}>()
);

export const removeBook = createAction(
    'Remove a Book',
    props<{bookId: string}>()
);

export const addAuthor = createAction(
    'Add New Author',
    props<{ author: Author}>()
);

export const removeAuthor = createAction(
    'Remove an Author',
    props<{ authorId: string }>()
);