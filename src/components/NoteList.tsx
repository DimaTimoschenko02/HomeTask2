import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";
import Note from "./Note";

const NoteList:FC = () =>{
    const {setNotes} = useActions()
    const {notes , total} = useTypedSelector(state => state)
    
    
    return(
        <Container> 
            {notes.map( el => !el.archieved ? <Note note={el} key={el.id}/>:null)}
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
`
const Header =  styled.div`
    
`
export default NoteList