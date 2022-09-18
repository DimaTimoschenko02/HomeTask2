import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypeSelector";
import Note from "./Note";

const ArchNoteList: FC = () => {
  const { notes } = useTypedSelector((state) => state);
  return (
    <Container>
      {notes.map((el) =>
        el.archieved ? <Note note={el} key={el.id} /> : null
      )}
    </Container>
  );
};
export const Container = styled.div`
  overflow: auto;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export default ArchNoteList;
