import { Dispatch } from "redux"
import { INoteAction, NotesActionTypes } from "../../types/notes.types"


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