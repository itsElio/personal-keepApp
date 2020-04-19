import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// La funzione Note richiede un input di (props), cioè le proprietà che gli verranno passate
// Esegue il render di un div e richiede props di title e content.

function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    )
}

export default Note;