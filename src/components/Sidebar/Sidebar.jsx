import React from "react";
import "./Sidebar.css";

const Sidebar = ({ groups, openPopup, openNoteEditor }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Pocket Notes</h1>
        <button className="create_butn" onClick={openPopup}>
          + Create Notes group
        </button>
      </div>
      <div className="app-sidebar-notes">
        <ul>
          {groups.map((group, index) => (
            <li key={index} onClick={() => openNoteEditor(group.id)}>
              <div className="circle" style={{ backgroundColor: group.color }}>
                {" "}
                {group.name.slice(0, 2)}{" "}
              </div>
              {group.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
