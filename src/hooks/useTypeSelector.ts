import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TNoteReducer } from "../store/reducers/note.reducer";

export const useTypedSelector:TypedUseSelectorHook<TNoteReducer> = useSelector