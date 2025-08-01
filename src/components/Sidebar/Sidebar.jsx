import React, { useState } from 'react';
import './Sidebar.css';
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiClockClockwise } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = ({ theme }) => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${theme}`} style={{ width: extended ? '250px' : '70px' }}>
      <div className="top">
        <div className="menu">
          <IoMenu className="sidebar-icon" onClick={() => setExtended(prev => !prev)} />
        </div>
        <div className="new-chat">
          <FaPlus className="sidebar-icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <div className="recent-title">Recent</div>
            <div className="recent-entry">
              <IoChatboxOutline className="sidebar-icon" />
              <p>What is React ...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <IoIosHelpCircleOutline className="sidebar-icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <PiClockClockwise className="sidebar-icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <MdOutlineSettings className="sidebar-icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
