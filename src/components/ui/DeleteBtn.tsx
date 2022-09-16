import React from "react";
import {AiFillDelete} from 'react-icons/ai'
interface IDeleteProps{
    id:string
}
const DeleteBtn = ({id}:IDeleteProps) =>{
    return (
        <div>
            <AiFillDelete/>
        </div>
    )
}

export default DeleteBtn