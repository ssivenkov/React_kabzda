import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion";
import {ControlledRaiting, RaitingValueType} from "./components/ControlledRaiting/ControlledRaiting";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ControlledOnOff} from "./components/ControlledOnOff/ControlledOnOff";

function App() {
    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <p>Controlled switch</p>
            <UncontrolledOnOff/>
            <p>Uncontrolled switch</p>
            <ControlledOnOff on={switchOn}
                             onChange={ (on) => setSwitchOn(on) }/>
            <ControlledAccordion titleValue={"controlled accordion"}
                                 collapsed={accordionCollapsed}
                                 onClick={setAccordionCollapsed}
            />
            <UncontrolledAccordion titleValue={"uncontrolled accordion"}/>
            <br/>
            <p>Controlled raiting</p>
            <ControlledRaiting value={raitingValue}
                               onClick={setRaitingValue}/>
            <br/>
            <p>Uncontrolled raiting</p>
            <UncontrolledRaiting/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h3>{props.title}</h3>
}

export default App;