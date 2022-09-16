import React from "react";
import {IoMdArchive} from 'react-icons/io'
import { useActions } from "../../hooks/useActions";
interface IArchProps{
    id:string
}
const ArchieveBtn = ({id}:IArchProps) =>{
    const {changeArchState} = useActions()
    return (
        <div>
            <IoMdArchive onClick={() =>changeArchState(id) }/>
        </div>
    )
}

export default ArchieveBtn