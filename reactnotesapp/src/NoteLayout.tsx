import { useOutletContext, useParams } from "react-router-dom";
import { Note } from "./App";
import { Navigate , Outlet } from "react-router-dom";

type NoteLayoutProps = {
  notes: Note[]
}

function NoteLayout( { notes }: NoteLayoutProps ) {
  const { id } = useParams();
  const note = notes.find(n => n.id === id);

  if (note == null) return <Navigate to="/" replace />
  return <Outlet context={note}/>
}

export function useNote() {
  return useOutletContext<Note>()
}

export default NoteLayout;