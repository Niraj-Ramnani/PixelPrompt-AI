import React, { useContext, useState } from 'react';
import './Main.css';
import { FaRegCompass, FaCode } from 'react-icons/fa';
import { MdLightbulbOutline } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import { RiGalleryView2 } from 'react-icons/ri';
import { IoMdSend } from 'react-icons/io';
import { Context } from '../../context/Context.jsx';

const Main = () => {
  const {
    onSent, recentPrompt, showResult, loading, resultData, setInput, input,
  } = useContext(Context);

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`main ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav">
        <p>PixelPrompt AI</p>
        <div className="nav-right">
          <button className="toggle-btn" onClick={toggleTheme}>
            {darkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
          <img src="src/assets/react.svg" alt="logo" />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev</span></p>
              <p>What are we creating today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <FaRegCompass className="icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <MdLightbulbOutline className="icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <FiMessageSquare className="icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <FaCode className="icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="src/assets/react.svg" alt="icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="src/assets/gemini_icon.png" alt="gemini" />
              {loading ? (
                <div className="loader">
                  <hr /><hr /><hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <RiGalleryView2 className="bottom-icon" />
              <IoMdSend onClick={() => onSent()} className="bottom-icon" />
            </div>
          </div>
          <p className="bottom-info">Made with ❤️ by Niraj Ramnani</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
