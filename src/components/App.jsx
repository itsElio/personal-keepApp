/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

//Esegue il render dei singoli componenti Header, Footer, ed itera la funzione createNote 
// per ogni elemento all'interno di "notes", importato da notes.js

function App(props) { 

    const [notes, setNotes] = useState([]);
    const [load, setLoad] = useState(false);

    function addNote(newNote) {
        setNotes(prevNotes => {
            // con ...prevNotes reinserisce tutti gli oggetti dell'array e ne aggiunge un altro (newNote) passato alla funzione
            return [...prevNotes, newNote];
       }); 
    }

    //esegue una richiesta Get ogni volta che la pagina viene aggiornata, prende tutti i dati dal database, tramite funzione
    // setNotes aggiorna lo state, aggiungendo le Note ricevute come risposta
    function onLoad() {
        axios.get("/api")
        .then(function (response) {
          setNotes(response.data);
        });
        return;
    }
    
    // utilizzo uno state per chiamare solo una volta la funzione onLoad(), poichè, visto che il documento esegue il reload
    // ogni volta che viene aggiunta una nuova nota, la funzione onLoad() inviava numerose richieste al server.
    function isLoaded() {
        if(!load) {
            onLoad();
            setLoad(true);
        } else {
            return;
        }
    } 
    
    function deleteNote(passedId) {
        
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) => {
                return passedId !== noteItem.id;
            });
        }) 

        axios.delete("/delete", { data: { id: passedId } });
       //onLoad();
        console.log(passedId);
    }

   return(
    <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {isLoaded()}
        {notes.map((noteItem, index) =>{
            return (
        <Note 
            key={index}
            id={noteItem.id}
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