import { Dispatch } from "redux"
import { INote, INoteAction, NotesActionTypes } from "../../types/notes.types"
import notes from '../../notes.data'
import NoteDTO from "../../dto/note.dto"

export const changeVisibility = () =>{
    return (dispatch:Dispatch<INoteAction>) =>{
        dispatch({type:NotesActionTypes.ChangeVisionAction})
    }
}

export const changeArchState =(id:string) =>{
    return(dispatch:Dispatch<INoteAction>) =>{
        dispatch({type:NotesActionTypes.ArchieveNoteAction , payload:{id}})
    }
}

export const setNotes = () =>{
    return (dispatch:Dispatch<INoteAction>) =>{
        const data = notes.map(note => new NoteDTO(note))
        dispatch({type:NotesActionTypes.SetNotesAction, payload:data})
    }
}

export const deleteNote =(note:NoteDTO) =>{
    return (dispatch:Dispatch<INoteAction>) =>{
        dispatch({type:NotesActionTypes.DeleteNoteAction , payload:note})
    }
}