import { createReducer, on } from "@ngrx/store";
import { Book } from "src/interface/Book";
import * as StateActions from './state.actions';

export const initialState: {[key: string]: Book} = {}

export const booksReducer = createReducer(
    initialState,
    on(StateActions.addBook, (state, { book }) => {
        return {...state, [book.id]: book};
    }),
    on(StateActions.removeBook, (state, { bookId }) => {
        const newState = { ...state };
        delete newState[bookId];
        return newState;
    }),
    on(StateActions.removeAuthor, (state, { authorId }) => {
        const newState = { ...state };
        let idx: string[] = [];
        for(const key of Object.keys(newState)) {
            if (newState[key].authorId === authorId) {
                idx.push(key);
            }
        }
        if (idx.length > 0) {
            idx.forEach(i => {
                delete newState[i]
            })
        }
        return newState;
    }),
);