import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArchNoteList from "../components/ArchNoteList";
import NoteList from "../components/NoteList";
import TotalNotes from "../components/TotalNotes";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";
import {NavigateOptions} from 'react-router-dom'
const HomePage = () => {
  const { changeVisibility, setNotes } = useActions();
  const { showAcive  , notes} = useTypedSelector((state) => state);
  const navigate = useNavigate()
  // useEffect(() => {
  //   setNotes();
  // }, []);
  return (
    <div>
      {showAcive ? <NoteList /> : <ArchNoteList />}
      {/* TODO:move to UI */}
      <button onClick={() => {changeVisibility()
      
      console.log(notes)}}> Change</button>
      <button onClick={() => navigate('/note')}> Create</button>
      <TotalNotes />
    </div>
  );
};
export default HomePage;
