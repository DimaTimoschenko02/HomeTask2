import React, { FC } from "react";
import styled from "styled-components";
import NoteManageButtons from "./NoteManageButtons";
import NoteDTO from "../dto/note.dto";
interface INoteProps {
  note: NoteDTO;
}
const Note = ({ note }: INoteProps) => {
  return (
    <Container>
      <div>
        {" "}
        <p>{note.name}</p>
      </div>
      <div>
        <p>{note.createdAt}</p>
      </div>
      <div>
        {" "}
        <p>{note.category}</p>
      </div>
      <div>
        {" "}
        <p>{note.content}</p>
      </div>
      <div>
        {" "}
        <p>{note.dates}</p>
      </div>
      <div className="buttons">
        <NoteManageButtons note={note} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background-color: #c3ceefc8;
  justify-content: space-between;
  div {
    justify-content: flex-start;
    display: flex;
    align-items: center;
    align-content: space-around;
    padding-left: 10px;

    width: 20%;
  }
  .buttons {
    justify-content: center;
  }
`;
export default Note;
