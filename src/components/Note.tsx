import React, { FC } from "react";
import { INote } from "../types/notes.types";
import styled from 'styled-components'
import NoteManageButtons from "./NoteManageButtons";
interface INoteProps{
    note:INote
}
const Note = ({note}:INoteProps) =>{
    return(
        <Container>
            <p>{note.name}</p>
            <p>{note.createdAt}</p>
            <p>{note.category}</p>
            <p>{note.content}</p>
            <p>{note.dates}</p>
            <NoteManageButtons note={note}/>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:row;
    border:2px , solid , gray;
    justify-content:space-between;
`
export default Note