import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

	const [noteItem, setNoteItem] = React.useState({
		title: "",
		content: ""
	});

	const [isExpanded, setisExpanded] = React.useState(false);

  	function handleChange(event) {
		var { name, value } = event.target;
		setNoteItem(prevNote => {
	  		return {
				...prevNote,
				[name]: value
	  		};
		});
	  }
	  
	  function handleClick() {
		  setisExpanded(true);
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
				{isExpanded? <input
				name="title"
				onChange={handleChange}
				placeholder="Title"
				value={noteItem.title}
				/> : null}
				<textarea
				name="content"
				onChange={handleChange}
				onClick={handleClick}
				placeholder="Take a note..."
				rows={isExpanded?"3":"1"}
				value={noteItem.content}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
					<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
  	);
}

export default CreateArea;
