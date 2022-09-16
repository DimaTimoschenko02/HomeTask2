import React from "react";
import {MdModeEditOutline} from 'react-icons/md'
import { INote } from "../../types/notes.types";

interface IEditProps{
    note:INote
}
const EditBtn = ({note}:IEditProps) =>{
    return (
        <div>
                <MdModeEditOutline/>
        </div>
    )
}

export default EditBtn