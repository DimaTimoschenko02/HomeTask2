import React from "react";
import {MdModeEditOutline} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import NoteDTO from "../../dto/note.dto";
import { INote } from "../../types/notes.types";
import { ManageBtn } from "./ArchieveBtn";

interface IEditProps{
    note:NoteDTO
}
const EditBtn = ({note}:IEditProps) =>{
    const navigate = useNavigate()
    return (
        <ManageBtn>
            <MdModeEditOutline onClick={() => navigate('/note' , {state:{note}})}/>
        </ManageBtn>
    )
}

export default EditBtn