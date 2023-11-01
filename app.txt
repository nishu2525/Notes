import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Popup from "./components/Sidebar/Popup";
import Main from "./components/Main/Main";

const App = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const openNoteEditor = (groupId) => {
    setSelectedGroupId(groupId);
  };

  const [groups, setGroups] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };
  return (
    <div className="app">
      <Sidebar
        groups={groups}
        openPopup={openPopup}
        openNoteEditor={openNoteEditor}
      />
      <Main groupId={selectedGroupId} groups={groups} />
      {isPopupOpen && <Popup onClose={closePopup} onGroupCreate={addGroup} />}
    </div>
  );
};
export default App;
