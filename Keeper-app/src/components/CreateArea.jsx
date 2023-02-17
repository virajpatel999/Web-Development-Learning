import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false)
  const [inputNote, setNote] = useState({
    title:"",
    content:""
  });

  function expand(){
    setExpand(true);
  }

  function handleChange(event){
    const {name, value} = event.target;

    return setNote(prevValue => {
      return {
        ...prevValue,
        [name]:value
      };
    });
  }

  function submitNote(event){
    props.onAdd(inputNote);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded &&
        <input name="title" value={inputNote.title} placeholder="Title" onChange={handleChange} />
        }
        <textarea name="content" value={inputNote.content} placeholder="Take a note..." rows={isExpanded ? "3" : "1"} onChange={handleChange} onClick={expand} />
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
