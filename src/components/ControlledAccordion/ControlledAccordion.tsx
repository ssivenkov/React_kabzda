import React from "react";

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

export function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={ () => {props.onClick(!props.collapsed)} }
            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
            {/* это условный рендеринг. Понятнее:
            props.collapsed === false && <AccordionBody/> */}
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
            <h3 onClick={ () => {props.onClick()} }>{props.title}</h3>
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