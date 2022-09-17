import React from "react";
import {MdModeEditOutline} from 'react-icons/md'
import NoteDTO from "../../dto/note.dto";
import { INote } from "../../types/notes.types";

interface IEditProps{
    note:NoteDTO
}
const EditBtn = ({note}:IEditProps) =>{
    return (
        <div>
                <MdModeEditOutline/>
        </div>
    )
}

export default EditBtn