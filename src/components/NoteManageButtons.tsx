import styled from "styled-components";
import NoteDTO from "../dto/note.dto";
import ArchieveBtn from "./ui/ArchieveBtn";
import DeleteBtn from "./ui/DeleteBtn";
import EditBtn from "./ui/EditBtn";

interface IManageProps {
  note: NoteDTO;
}
const NoteManageButtons = ({ note }: IManageProps) => {
  return (
    <Container>
      <EditBtn note={note} />
      <ArchieveBtn id={note.id} />
      <DeleteBtn note={note} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export default NoteManageButtons;
