import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Popup from "./components/Sidebar/Popup";
import Main from "./components/Main/Main";

const App = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [groups, setGroups] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openNoteEditor = (groupId) => {
    setSelectedGroupId(groupId);
    console.log("Opening note editor for Group ID:", groupId);
  };
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };
  const addGroup = (group) => {
    const updatedGroups = [...groups, { ...group, notes: [] }];
    setGroups(updatedGroups);
  };
  const handleGroupClick = (groupId, groupName) => {
    if (selectedGroupId === groupId) {
      setSelectedGroupId(null);
    } else {
      setSelectedGroupId(groupId);
      openNoteEditor(groupId, groupName); 
    }
  };
return (
    <div className="app">
      <Sidebar groups={groups} openPopup={openPopup} handleGroupClick={handleGroupClick} selectedGroupId={selectedGroupId} />
<Main groupId={selectedGroupId} groups={groups} setSelectedGroupId={setSelectedGroupId} />
      {isPopupOpen && <Popup onClose={closePopup} onGroupCreate={addGroup} />}
    </div>
  );
};

export default App;

