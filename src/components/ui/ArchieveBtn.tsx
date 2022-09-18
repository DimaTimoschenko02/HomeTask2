import React from "react";
import {IoMdArchive} from 'react-icons/io'
import styled from "styled-components";
import { useActions } from "../../hooks/useActions";
interface IArchProps{
    id:string
}
const ArchieveBtn = ({id}:IArchProps) =>{
    const {changeArchState} = useActions()
    return (
        <ManageBtn>
            <IoMdArchive width={50} height={50}  onClick={() =>changeArchState(id) }/>
        </ManageBtn>
    )
}
export const ManageBtn = styled.div`
    height: 60px !important;
    width: 60px !important;
`
export default ArchieveBtn