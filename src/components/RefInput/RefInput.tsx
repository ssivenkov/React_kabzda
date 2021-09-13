import React, {useRef, useState} from 'react';

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const saveValue = () => {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value);
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={saveValue}>save</button> - actual value: {value}
    </>
}