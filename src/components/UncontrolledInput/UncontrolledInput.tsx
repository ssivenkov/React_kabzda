import React, {ChangeEvent, useState} from 'react';
import s from './UncontrolledInput.module.css'

export const UncontrolledInputComponent = () => {
    const [value, setValue] = useState("");

    const onChangeFunc = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }

    return <div className={s.container}>
        <div>Uncontrolled input</div>
        <input onChange={onChangeFunc} />
        <div>value: {value}</div>
    </div>
}