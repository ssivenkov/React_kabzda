import React, {ChangeEvent, useState} from 'react';
import s from './ControlledSelect.module.css'

export const ControlledSelectComponent = () => {
    const [value, setValue] = useState<string | undefined>("2");
    const changeFunc = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <div className={s.container}>
        <div>Controlled select</div>
        <select value={value}
                onChange={changeFunc}>
            <option>none</option>
            <option value="1">Moscow</option>
            <option value="2">Minsk</option>
            <option value="3">Kiev</option>
        </select>
    </div>
}