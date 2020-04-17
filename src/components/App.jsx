import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

//la funzione createNote crea una nuova "Note" per ogni elemento dell'array di oggetti.
// passando come valori la key, title e content dell'elemento che gli viene passato

function createNote(noteItem) {
    return(
        <Note 
            key = {noteItem.key}
            title = {noteItem.title}
            content = {noteItem.content}
        />
    )
}

//Esegue il render dei singoli componenti Header, Footer, ed itera la funzione createNote 
// per ogni elemento all'interno di "notes", importato da notes.js

function App(props) {
   return(
    <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>
   )
}

export default App;