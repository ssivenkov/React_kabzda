import React, {ChangeEvent, useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState("");

    const onChangeFunc = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }

    return <>
        <input onChange={onChangeFunc} /> - {value}
    </>
}