import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
    content: ""}
    );
  }

  function handleChange(event) {
    // Estrapoliamo name e value dall'event target
    const {name, value} = event.target
    //Utilizziamo la funzione per aggiornare lo state per chiamare un'altra funzione a cui viene passato il valore precedente dello state
    setNote(prevNote =>{
      return {
        // ...prevNote permette di non modificare i valori precedenti,"reinserendoli"
        ...prevNote,
        // prendiamo [name] come parte dell'oggetto da aggiornare (title o content) e lo setta uguale a value
        [name] : value
      }
    });
  } 


  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} name="title" value={note.title} placeholder="Title" /> : null }
        <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;