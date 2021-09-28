import React, {useRef, useState} from 'react';
import s from './RefInput.module.css';

export const RefInputComponent = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const saveValue = () => {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value);
    }

    return <div className={s.container}>
        <div>Uncontrolled input with ref</div>
        <input ref={inputRef}/>
        <button onClick={saveValue}>save</button>
        <div>actual value: {value}</div>
    </div>
}