import React from "react";

function CreateArea(props) {
  const [noteItem, setNoteItem] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    var { name, value } = event.target;
    setNoteItem(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(noteItem);
    setNoteItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={noteItem.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={noteItem.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
