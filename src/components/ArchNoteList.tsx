import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypeSelector";
import Note from "./Note";

const ArchNoteList:FC = () =>{

    const {notes} = useTypedSelector(state => state)
    return(
        <Container> 
            {notes.map( el => el.archieved ? <Note note={el} key={el.id}/>:null)}
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
`
const Header =  styled.div`
    
`
export default ArchNoteList