import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { Container } from "./ArchNoteList";
import Note from "./Note";

const NoteList: FC = () => {
  const { notes } = useTypedSelector((state) => state);

  return (
    <Container>
      {notes.map((el) =>
        !el.archieved ? <Note note={el} key={el.id} /> : null
      )}
    </Container>
  );
};

export default NoteList;
