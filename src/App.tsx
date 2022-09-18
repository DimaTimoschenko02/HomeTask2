import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import ArchNoteList from "./components/ArchNoteList";
import NoteList from "./components/NoteList";
import TotalNotes from "./components/TotalNotes";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { INoteAction } from "./types/notes.types";
import HomePage from "./pages/HomaPage";
import CreateUpdatePage from "./pages/CreateUpdatePage";
import "./App.css";
function App() {
  const { setNotes } = useActions();
  useEffect(() => {
    setNotes();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note" element={<CreateUpdatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
