import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css'

export function UncontrolledOnOffComponent() {
    let [on, setOn] = useState(false);

    const containerStyle = {
        display: "flex"
    }
    const onStyle = {
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        marginTop: "12px",
        borderRadius: "50%",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    };

    return (
      <div className={s.container}>
          <span>Controlled switch</span>
          <div style={containerStyle}>
              <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
              <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
              <div style={indicatorStyle}> </div>
          </div>
      </div>
    )
}