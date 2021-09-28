import React, {ChangeEvent, useState} from 'react';
import s from './ControlledInput.module.css'

export const ControlledInputComponent = () => {
    const [value, setValue] = useState('');

    const changeFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <div className={s.container}>
        <div>Controlled input</div>
        <input value={value}
               onChange={changeFunc}
        />
    </div>
}