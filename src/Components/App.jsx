import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = React.useState([]);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function renderNote(note) {
    return (
      <Note
        key={notes.indexOf(note)}
        id={notes.indexOf(note)}
        title={note.title}
        content={note.content}
        onChecked={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(renderNote)}
      <Footer />
    </div>
  );
}

export default App;
