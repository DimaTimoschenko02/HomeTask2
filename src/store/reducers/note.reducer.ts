import {
  INote,
  INoteAction,
  INoteState,
  NotesActionTypes,
} from "../../types/notes.types";

interface IOjbectKeys {
  [key: string]: number;
}
export interface ICategory extends IOjbectKeys {
  idea: number;
  task: number;
  random: number;
  quote: number;
}
const initialState: INoteState = {
  notes: [],
  showAcive: true,
  total: {
    arch: { idea: 0, task: 0, random: 0, quote: 0 },
    active: {
      idea: 0,
      task: 0,
      random: 0,
      quote: 0,
    },
  },
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
      if (action.payload.archieved) {
        state.total.arch[action.payload.category]--;
      } else {
        state.total.active[action.payload.category]--;
      }
      state.notes = state.notes.filter((el) => el.id !== action.payload.id);
      ///console.log(state.notes, action.payload.id);
      return { ...state };

    case NotesActionTypes.ArchieveNoteAction:
      state.notes.forEach((el) => {
        if (el.id === action.payload.id) {
          if (el.archieved) {
            state.total.arch[el.category]--;
            state.total.active[el.category]++;
          } else {
            state.total.arch[el.category]++;
            state.total.active[el.category]--;
          }
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
    case NotesActionTypes.SetNotesAction:
      const obj: {
        arch: ICategory;
        active: ICategory;
      } = {
        arch: { idea: 0, task: 0, random: 0, quote: 0 },
        active: {
          idea: 0,
          task: 0,
          random: 0,
          quote: 0,
        },
      };
      action.payload.forEach((el) => {
        if (el.archieved) {
          obj.arch[el.category]++;
        } else {
          obj.active[el.category]++;
        }
      });
      return { ...state, notes: action.payload, total: obj };
    default:
      return initialState;
  }
};

export type TNoteReducer = ReturnType<typeof noteReducer>;
