import React from "react";

type UncontrolledOnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function ControlledOnOff(props: UncontrolledOnOffType) {
    const containerStyle = {
        display: "flex"
    }
    const onStyle = {
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        marginTop: "12px",
        borderRadius: "50%",
        marginLeft: "10px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div style={containerStyle}>
            <div style={onStyle} onClick={ ()=>{props.onChange(true)} }>On</div>
            <div style={offStyle} onClick={ ()=>{props.onChange(false)} }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}