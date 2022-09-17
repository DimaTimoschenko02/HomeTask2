import React from "react";
import { AiFillDelete } from "react-icons/ai";
import NoteDTO from "../../dto/note.dto";
import { useActions } from "../../hooks/useActions";
interface IDeleteProps {
  note: NoteDTO;
}
const DeleteBtn = ({ note }: IDeleteProps) => {
  const { deleteNote } = useActions();
  return (
    <div>
      <AiFillDelete onClick={() => deleteNote(note)} />
    </div>
  );
};

export default DeleteBtn;
