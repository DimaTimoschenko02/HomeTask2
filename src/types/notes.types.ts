export interface INote{
    createdAt:string,
    name:string,
    dates:string[],
    content:string,
    category:string,
    id:string,
    archieved:boolean
}

export enum NotesActionTypes {
    EditNoteAction = "EditNote",
    DeleteNoteAction = "DeleteNote",
    ArchieveNoteAction = "ArchieveNote",
  }
  export interface INoteState {
    notes: INote[];
  }
  export type INoteAction = DeleteNotesAction | EditNotesAction | ArchieveNotesAction
  
  interface DeleteNotesAction{
      type:NotesActionTypes.DeleteNoteAction,
      payload:{id:string}
  }
  interface EditNotesAction{
      type:NotesActionTypes.EditNoteAction,
      payload:INote
  }
  interface ArchieveNotesAction{
      type:NotesActionTypes.ArchieveNoteAction,
      payload:{id:string}
  }
 