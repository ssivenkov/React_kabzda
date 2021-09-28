import React, {ChangeEvent, useState} from 'react';
import s from './ControlledCheckbox.module.css'

export const ControlledCheckboxComponent = () => {
    const [value, setValue] = useState(false);
    const changeFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <div className={s.container}>
        <div>Controlled checkbox</div>
        <input type="checkbox"
               onChange={changeFunc}
               checked={value}
        />
    </div>
}