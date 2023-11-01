import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css'

const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

const Popup = ({ onClose, onGroupCreate }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleGroupCreation = () => {
    if (groupName && selectedColor) {
      onGroupCreate({ name: groupName, color: selectedColor });
      onClose(); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.getElementById('popup');
      if (popup && !popup.contains(event.target)) {
        onClose(); // Close the popup when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div id="popup" className="popup">
      <div className='popup_content'>
      <h3>Create New Notes group</h3>
      <form action="">
        <h3><label htmlFor="">Group Name</label> <input type="text" value={groupName}
              onChange={(e) => setGroupName(e.target.value)}  placeholder='Enter your group name....' /></h3>
      </form>
       <h3>Choose colour</h3>
       <div className="color_options">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className={`color-option ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            />
          ))}
        </div>
        <button onClick={handleGroupCreation}>Create </button>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
