import {
  INote,
  INoteAction,
  INoteState,
  NotesActionTypes,
} from "../../types/notes.types";
import notes from "../../notes.data";
const initialState: INoteState = {
  notes,
  showAcive: true,
  total:{
    arch:{
      idea:1,
      task:2,
      random:1,
      quote:1
    },
    active:{
      idea:1,
      task:1,
      random:0,
      quote:0
    }
  }
};

export const noteReducer = (
  state = initialState,
  action: INoteAction
): INoteState => {
  switch (action.type) {
    case NotesActionTypes.EditNoteAction:
      state.notes.forEach((el) => {
        if ((el.id = action.payload.id)) {
          el = action.payload;
        }
      });
      return {
        ...state,
      };
    case NotesActionTypes.DeleteNoteAction:
      state.notes = state.notes.filter((el) => el.id !== action.payload.id);
      console.log(state.notes, action.payload.id);
      return { ...state };

    case NotesActionTypes.ArchieveNoteAction:
      state.notes.forEach((el) => {
        if ((el.id === action.payload.id)) {
          el.archieved = !el.archieved;
        }
      });
      return {
        ...state,
      };
    case NotesActionTypes.ChangeVisionAction:
      return {
        ...state,
        showAcive: !state.showAcive,
      };
    default:
      return initialState;
  }
};

export type TNoteReducer = ReturnType<typeof noteReducer>;
