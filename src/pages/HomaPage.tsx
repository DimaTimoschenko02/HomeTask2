import ArchNoteList from "../components/ArchNoteList";
import NoteList from "../components/NoteList";
import TotalNotes from "../components/TotalNotes";
import { useTypedSelector } from "../hooks/useTypeSelector";
import TableHeader from "../components/TableHeader";
import styled from "styled-components";
import SummaryTableHeader from "../components/TotalNoteHeader";
import ShowArchBtn from "../components/ui/ShowArchBtn";
import CreateNoteBtn from "../components/ui/CreateNoteBtn";
const HomePage = () => {
  const { showActive } = useTypedSelector((state) => state);

  return (
    <Container>
      <div className="notes">
        <TableHeader />
        {showActive ? <NoteList /> : <ArchNoteList />}
      </div>
      <div className="btns">
        <ShowArchBtn />
        <CreateNoteBtn />
      </div>
      <div className="total-notes">
        <SummaryTableHeader />
        <TotalNotes />
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .notes {
    height: 50%;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
  }
  .btns {
    height: 10%;
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .total-notes {
    height: 40%;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
  }
  padding-left: 5%;
  padding-right: 5%;
`;
export default HomePage;
