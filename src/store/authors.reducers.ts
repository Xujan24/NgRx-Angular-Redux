import { createReducer, on } from "@ngrx/store";
import { Author } from 'src/interface/Author';
import * as StateActions from './state.actions';

export const initialState: {[key: string]: Author} = {};

export const authorsReducer = createReducer(
    initialState,
    on(StateActions.addAuthor, (state, { author }) => {
        return { ...state, [author.id]: author};
    }),
    on(StateActions.removeAuthor, (state, { authorId }) => {
        const newState = { ...state };
        delete newState[authorId];

        return newState;
    })
)