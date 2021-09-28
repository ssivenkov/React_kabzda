import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";
import s from './UncontrolledAccordion.module.css'

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordionComponent(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false});
    return (
        <div className={s.container}>
            <AccordionTitle title={props.titleValue}
            onClick={ () => {
                dispatch({type: TOGGLE_COLLAPSED})} }/>
            {!state.collapsed && <AccordionBody/>}
            {/* это условный рендеринг. Понятнее:
            collapsed === false && <AccordionBody/> */}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <span className={s.title} onClick={ () => {props.onClick()} }>{props.title}</span>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}