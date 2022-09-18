import React from "react";
import { AiFillDelete } from "react-icons/ai";
import NoteDTO from "../../dto/note.dto";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { ManageBtn } from "./ArchieveBtn";
interface IDeleteProps {
  note: NoteDTO;
}
const DeleteBtn = ({ note }: IDeleteProps) => {
  const { deleteNote } = useActions();

  return (
    <ManageBtn>
      <AiFillDelete
        onClick={() => {
          deleteNote(note);
        }}
      />
    </ManageBtn>
  );
};

export default DeleteBtn;
