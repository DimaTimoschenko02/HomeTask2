import React from "react";
import styled from "styled-components";
import { INote } from "../types/notes.types";
import ArchieveBtn from "./ui/ArchieveBtn";
import DeleteBtn from "./ui/DeleteBtn";
import EditBtn from "./ui/EditBtn";

interface IManageProps{
    note:INote
}
const NoteManageButtons = ({note}:IManageProps) =>{
    return(
        <Container>
            <EditBtn note={note}/>
            <ArchieveBtn  id={note.id}/>
            <DeleteBtn  id={note.id}/>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`
export default NoteManageButtons