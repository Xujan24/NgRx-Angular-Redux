import { Author } from "src/interface/Author";
import { Book } from "src/interface/Book";

export interface AppState {
    books       : {[key: string]: Book};
    authors     : {[key: string]: Author};
}