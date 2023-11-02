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
  };


  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addGroup = (group) => {
   const updatedGroups =[...groups,{...group,notes:[]}];
   setGroups(updatedGroups);
  };

  const handleGroupClick = (groupId) => {
    if (selectedGroupId === groupId) {
      setSelectedGroupId(null);
    } else {
      setSelectedGroupId(groupId)
      openNoteEditor(groupId);
    }
  };
  // const newGroup = {
  //   id: generateUniqueId(),
  //   name: "New Group",
  //   notes: []
  // };
//   const updateNotesInGroup = (groupId, newNotes) => {
//   const updatedGroups = groups.map((group) => {
//     if (group.id === groupId) {
//       return { ...group, notes: newNotes }; // Create a new group object with updated notes
//     }
//     return group; // Return other groups as is
//   });
//   setGroups(updatedGroups);
// };
  return (
    <div className="app">
      <Sidebar
        groups={groups}
        openPopup={openPopup}
        // openNoteEditor={openNoteEditor}
        handleGroupClick={handleGroupClick}
        selectedGroupId={selectedGroupId}
        // setSelectedGroupId={setSelectedGroupId}
      />
      <Main groupId={selectedGroupId} groups={groups} setSelectedGroupId={setSelectedGroupId} />
      {isPopupOpen && <Popup onClose={closePopup} onGroupCreate={addGroup} />}
    </div>
  );
};
export default App;
