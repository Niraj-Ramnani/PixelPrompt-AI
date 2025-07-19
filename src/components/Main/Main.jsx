import React, { useContext } from 'react'
import './Main.css'
import { FaRegCompass } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { RiGalleryView2 } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { Context } from '../../context/Context.jsx'

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)
  return (
   <div className="main">
    <div className="nav">
      <p>Gemini</p>
      <img src="src\assets\react.svg" alt="" />
    </div>
    <div className="main-container">
      { !showResult?
      <>
                <div className="greet">
        <p><span>Hello, Dev</span></p>
        <p>How can I help you today?</p>
      </div>
      <div className="cards">
        <div className="card">
          <p>Suggest beautiful places to see on upcoming road trip</p>
          <FaRegCompass className='icon'/>
        </div>
        <div className="card">
          <p>Briefly summarize this concept: urban planning</p>
          <MdLightbulbOutline className='icon'/>
        </div>
        <div className="card">
          <p>Brainstorm team bonding activities for our work retreat </p>
          <FiMessageSquare className='icon'/>
        </div>
        <div className="card">
          <p>Improve the readability of the following code </p>
          <FaCode className='icon'/>
        </div>
      </div>
      </>
      : 
      <div className='result'>
        <div className="result-title">
          <img src="src\assets\react.svg" alt="" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src="src\assets\gemini_icon.png" alt="" />
          {loading?
          <div className='loader'>
            <hr />
            <hr />
            <hr />
            </div>
            :
          <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
        </div>
        </div>

      }

      <div className="main-bottom">
        <div className="search-box">
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />

          <div>
            <RiGalleryView2 className='bottom-icon' />
            <IoMdSend onClick={()=>onSent()} className='bottom-icon'/>
          </div>
        </div>
        <p className='bottom-info'>Google Gemini Clone made by Niraj Ramnani </p>
      </div>
    </div>
   </div>
  )
}

export default Main