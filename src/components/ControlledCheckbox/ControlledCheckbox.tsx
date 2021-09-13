import React, {ChangeEvent, useState} from 'react';

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false);
    const changeFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <input type="checkbox"
                  onChange={changeFunc}
                  checked={value}
    />
}