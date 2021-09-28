import React, {useState} from "react";
import s from './UncontrolledRaiting.module.css'

export function UncontrolledRatingComponent() {
    let [value, setValue] = useState(0);

    return (
        <div className={s.container}>
          <div>Uncontrolled rating</div>
            <Star selected={value > 0} setValue={ () => setValue(1) }/>
            <Star selected={value > 1} setValue={ () => setValue(2) }/>
            <Star selected={value > 2} setValue={ () => setValue(3) }/>
            <Star selected={value > 3} setValue={ () => setValue(4) }/>
            <Star selected={value > 4} setValue={ () => setValue(5) }/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span className={s.star} onClick={ () => props.setValue()}>
        {props.selected ? <b>star </b> : "star "}</span>
}