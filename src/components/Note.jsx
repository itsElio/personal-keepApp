import React from "react";

// La funzione Note richiede un input di (props), cioè le proprietà che gli verranno passate
// Esegue il render di un div e richiede props di title e content.

function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;