import NoteDTO from "../dto/note.dto";
import { ICategory } from "../store/reducers/note.reducer";

export interface INote {
  createdAt: string;
  name: string;
  dates: string;
  content: string;
  category: string;
  id: string;
  archieved: boolean;
}

export enum NotesActionTypes {
  EditNoteAction = "EditNote",
  DeleteNoteAction = "DeleteNote",
  ArchieveNoteAction = "ArchieveNote",
  ChangeVisionAction = "ChangeVision",
  SetNotesAction = "SetNotes",
  CreateNoteAction = "CreateNote",
}
export interface INoteState {
  notes: NoteDTO[];
  showAcive: boolean;
  total: {
    arch: ICategory;
    active: ICategory;
  };
}
export type INoteAction =
  | DeleteNotesAction
  | EditNotesAction
  | ArchieveNotesAction
  | ChangeVisionAction
  | SetNotesAction
  | CreateNoteAction;
  
interface SetNotesAction {
  type: NotesActionTypes.SetNotesAction;
  payload: NoteDTO[];
}
interface CreateNoteAction {
  type: NotesActionTypes.CreateNoteAction;
  payload: NoteDTO;
}
interface ChangeVisionAction {
  type: NotesActionTypes.ChangeVisionAction;
}
interface DeleteNotesAction {
  type: NotesActionTypes.DeleteNoteAction;
  payload: NoteDTO;
}
interface EditNotesAction {
  type: NotesActionTypes.EditNoteAction;
  payload: NoteDTO;
}
interface ArchieveNotesAction {
  type: NotesActionTypes.ArchieveNoteAction;
  payload: { id: string };
}
