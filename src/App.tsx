import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import ArchNoteList from "./components/ArchNoteList";
import NoteList from "./components/NoteList";
import TotalNotes from "./components/TotalNotes";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypeSelector";

import { INoteAction } from "./types/notes.types";

function App() {
  //const dispatch = useDispatch<any>()
  const {showAcive} = useTypedSelector(state => state)
  const {changeVisibility} = useActions()
  return <div className="App">
  {
    showAcive?<NoteList/>:<ArchNoteList/>
  }
  <button onClick={() => changeVisibility()}> change</button>
  <TotalNotes/>
  </div>;
}

export default App;
