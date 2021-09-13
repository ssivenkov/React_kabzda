import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion";
import {ControlledRaiting, RaitingValueType} from "./components/ControlledRaiting/ControlledRaiting";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ControlledOnOff} from "./components/ControlledOnOff/ControlledOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {GetValueOfUncontrolledInputByButtonPress} from "./components/RefInput/RefInput";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledCheckbox/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledSelect/ControlledSelect";
import {CustomSelect} from "./components/CustomSelect/CustomSelect";

function App() {
    let [ratingValue, setRatingValue] = useState<RaitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [customSelectValue, setCustomSelectValue] = useState<string>('none')

    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <p>Controlled switch</p>
            <UncontrolledOnOff/>
            <p>Uncontrolled switch</p>
            <ControlledOnOff on={switchOn}
                             onChange={(on) => setSwitchOn(on)}/>
            <ControlledAccordion titleValue={"controlled accordion"}
                                 collapsed={accordionCollapsed}
                                 onClick={setAccordionCollapsed}
                                 items={[
                                     {title: "Dimych", value: 1},
                                     {title: "Valera", value: 2},
                                     {title: "Artem", value: 3}
                                 ]}
            />
            <UncontrolledAccordion titleValue={"uncontrolled accordion"}/>
            <br/>
            <p>Controlled rating</p>
            <ControlledRaiting value={ratingValue}
                               onClick={setRatingValue}/>
            <br/>
            <p>Uncontrolled rating</p>
            <UncontrolledRaiting/>
            <p>Uncontrolled input</p>
            <UncontrolledInput/>
            <p>Uncontrolled input with ref</p>
            <GetValueOfUncontrolledInputByButtonPress/>
            <p>Controlled input</p>
            <ControlledInput/>
            <p>Controlled checkbox</p>
            <ControlledCheckbox/>
            <p>Controlled select</p>
            <ControlledSelect/>
            <p>Custom select</p>
            <CustomSelect value={customSelectValue}
                          onChange={setCustomSelectValue}
                          items={[
                              {title: "none", value: 0},
                              {title: "Dimych", value: 1},
                              {title: "Valera", value: 2},
                              {title: "Artem", value: 3}
                          ]}/>
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