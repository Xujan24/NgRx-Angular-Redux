import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Book } from "src/interface/Book";
import { Author } from "src/interface/Author";

export const selectBooks = createFeatureSelector<{[key: string]: Book}>('books');
export const selectAuthors = createFeatureSelector<{[key: string]: Author}>('authors');