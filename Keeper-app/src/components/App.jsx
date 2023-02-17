import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, updateNote] = useState([]);

  function addNote(inputNote){
    updateNote(prevValue => {
      return [...prevValue, inputNote];
    });
  }

  function deleteNote(id){
    updateNote(prevValue => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote}
       />
      {notes.map((noteItem, index) => {
        return (
          <Note 
            title={noteItem.title}
            content={noteItem.content}
            key={index}
            id={index}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
