export interface INote {
  createdAt: string;
  name: string;
  dates: string[];
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
}
export interface INoteState {
  notes: INote[];
  showAcive: boolean;
  total: {
    arch: {
      task: number;
      idea: number;
      quote: number;
      random: number;
    };
    active: { task: number; idea: number; quote: number; random: number };
  };
}
export type INoteAction =
  | DeleteNotesAction
  | EditNotesAction
  | ArchieveNotesAction
  | ChangeVisionAction;

interface ChangeVisionAction {
  type: NotesActionTypes.ChangeVisionAction;
}
interface DeleteNotesAction {
  type: NotesActionTypes.DeleteNoteAction;
  payload: { id: string };
}
interface EditNotesAction {
  type: NotesActionTypes.EditNoteAction;
  payload: INote;
}
interface ArchieveNotesAction {
  type: NotesActionTypes.ArchieveNoteAction;
  payload: { id: string };
}
