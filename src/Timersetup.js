import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isShown, setIsShown] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [isActive, setIsActive] = useState(false);

  var time; 
//   useEffect=()=> {
// const time= setInterval(() => {
//     if (setIsActive===true) {
//       setMinutes(minutes - 1);
//       setSeconds(59);
//       console.log("s");
//       } else{
//         setSeconds(seconds - 1);
//       }
//     }, 1000);
//     return () => clearInterval(time);
//   };
  function start(duration) {
    var timerDisplay = document.getElementById("time");

    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

  const show = () => {
    setIsShown(true);
    setIsShow(false);
  };

  const cancel=()=>{
    setIsShown(false);
    setIsShow(true);
  }
  

  return (
    <>
      <div className="task">
        <h1>
          <img src="/icon-white2.png" className="icon"></img> Promofocus
        </h1>
        <hr className="line1"></hr>
        <div className="timer-sec">
          <h1 id="time">
            {/* {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds} */}
            00:00
          </h1>
          {!isActive ? (
          <button className="start-btn" onClick={start(60)}>
            START
          </button>
          ):(
          <button className="start-btn" onClick={start}>
            STOP
          </button> )}
        </div>
        <div className="content">
          <p className="align1">Time to focus!</p>
          <div className="task-area">
            <p className="align2">
              Tasks <img src="/threedots-white.png" className="dots"></img>{" "}
            </p>
            <hr className="line2"></hr>
            {isShow && (
              <div className="task-entry" onClick={show}>
                <p className="add">
                  <img src="/plus-circle-white.png" className="plus"></img> Add
                  Task
                </p>
              </div>
            )}
            {isShown && (
              <div className="task-list">
                <div className="task-area">
                  <input
                    type="text"
                    className="task-name"
                    placeholder="What are you working on?"
                  ></input>
                  <p className="est-para">Est Pomodoros</p>
                  <div className="est">
                    <input
                      type="number"
                      className="digit"
                      min={0}
                      step={1}
                    ></input>
                    <button type="button" title="Ctrl key + U" class="up-dn">
                      <img
                        src="/caret-up.png"
                        alt="caret"
                        class="up-dn-img"
                      ></img>
                    </button>
                    <button type="button" title="Ctrl key + U" class="up-dn">
                      <img
                        src="/caret-down.png"
                        alt="caret"
                        class="up-dn-img"
                      ></img>
                    </button>
                  </div>
                  <div className="add-sec">
                    <button className="add-btn" title="Ctrl key + L">
                      +Add Note
                    </button>
                    <button className="add-btn" title="Ctrl key + L">
                      +Add Project
                    </button>
                  </div>
                </div>
                  <div className="save-sec">
                    <div >
                      <button className="cancel-btn" onClick={cancel}>Cancel</button>
                      <button className="save-btn">Save</button>
                    </div>
                  </div> 
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Timer;