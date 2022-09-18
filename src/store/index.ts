import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { noteReducer } from "./reducers/note.reducer";
import thunk from "redux-thunk";

export const store = createStore(noteReducer, applyMiddleware(thunk));
