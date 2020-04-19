/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";



//Esegue il render dei singoli componenti Header, Footer, ed itera la funzione createNote 
// per ogni elemento all'interno di "notes", importato da notes.js

function App(props) { 

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        console.log(newNote);
        setNotes(prevNotes => {
            // con ...prevNotes reinserisce tutti gli oggetti dell'array e ne aggiunge un altro (newNote) passato alla funzione
            return [...prevNotes, newNote];
       });
    }

    function deleteNote(id) {
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        })
    }

   return(
    <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) =>{
            return (
        <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />
    );
    })}
        <Footer />
    </div>
   );
}

export default App;