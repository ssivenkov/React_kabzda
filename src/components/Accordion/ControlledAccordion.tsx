import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={ () => {props.onClick(!props.collapsed)} }
            />
            {!props.collapsed && <AccordionBody/>}
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