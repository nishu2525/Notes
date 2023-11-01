import React, { useState } from "react";
import "./Main.css";
import lock from "../Main/lock.png";
import back_ig from "../Main/back.png";
import submit from "../Main/submit.png";
const Main = ({ groupId, groups }) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const [showNotesSection, setShowNotesSection] = useState(false);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleNoteSubmit = () => {
    if (note.trim() !== "") {
      const groupName = groups.find((group) => group.id === groupId).name;
      const newNote = {
        text: note,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: new Date().toLocaleDateString(),
        groupName: groupName,
      };
      notes.push(newNote);
      setNotes([...notes]);
      setNote("");
    }
  };

  return (
    <div className="main">
      {groupId !== null ? (
        <div className="notes-section">
          <div className="notes-print">
            <h2>Print Notes</h2>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>
                  <div className="note-time">{note.time}</div>
                  <div className="note-date">{note.date}</div>
                  <div className="note-text">{note.text}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="notes-editor">
            <div className="notes-editor-textarea-container">
              <textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Type your note..."
                className="notes-editor-textarea"
              />
              <img
                src={submit}
                alt="Submit"
                className="textsubmit-button"
                onClick={handleNoteSubmit}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="pre" onClick={() => setShowNotesSection(true)}>
          <img src={back_ig} className="main_bg" alt="" />
          <h1 className="heading">Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
          <span>
            <img src={lock} alt="lock" /> end-to-end encrypted
          </span>
        </div>
      )}
    </div>
  );
};

export default Main;
