import React, { useState,useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Popup from "./components/Sidebar/Popup";
import Main from "./components/Main/Main";

const App = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [groups, setGroups] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
  }, []);
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

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
  const addGroup = (group,id) => {
    const updatedGroups = [...groups, { ...group, id, notes: [] }];
    setGroups(updatedGroups);
  };
  const handleGroupClick = (groupId) => {
    if (selectedGroupId === groupId) {
      setSelectedGroupId(null);
    } else {
      setSelectedGroupId(groupId);
      openNoteEditor(groupId); 
    }
  };


return (
    <div className="app">
      <Sidebar groups={groups} openPopup={openPopup} handleGroupClick={handleGroupClick} selectedGroupId={selectedGroupId} />
      <Main groupId={selectedGroupId} groups={groups} setSelectedGroupId={setSelectedGroupId} />
      {isPopupOpen && <Popup onClose={closePopup} onGroupCreate={addGroup} groups={groups} />}
    </div>
  );
};

export default App;

