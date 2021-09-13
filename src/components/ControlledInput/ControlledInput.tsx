import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {
    const [value, setValue] = useState('');

    const changeFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <input value={value}
                  onChange={changeFunc}
    />
}