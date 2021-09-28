import React from "react";
import s from './ControlledAccordion.module.css'

type itemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: itemType[]
}

export function ControlledAccordionComponent(props: AccordionPropsType) {
    return (
        <div className={s.container}>
            <AccordionTitle title={props.titleValue}
                            onClick={ () => {props.onClick(!props.collapsed)} }
            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
            {/* это условный рендеринг. Понятнее:
            если props.collapsed === false тогда отрисуй <AccordionBody/> */}
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
            <span className={s.title} onClick={ () => {props.onClick()} }>
                {props.title}
            </span>
        </div>
    )
}

type AccordionBodyPropsType = {
    items: itemType[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
    )
}