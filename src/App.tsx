import React, { useState } from "react";
import "./App.css";
import { ControlledAccordionComponent } from "./components/ControlledAccordion/ControlledAccordion";
import { UncontrolledOnOffComponent } from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { ControlledOnOffComponent } from "./components/ControlledOnOff/ControlledOnOff";
import { UncontrolledAccordionComponent } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { ControlledRatingComponent, RaitingValueType } from "./components/ControlledRaiting/ControlledRaiting";
import { UncontrolledRatingComponent } from "./components/UncontrolledRaiting/UncontrolledRaiting";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { RefInputComponent } from "./components/RefInput/RefInput";
import { ControlledInputComponent } from "./components/ControlledInput/ControlledInput";
import { ControlledCheckboxComponent } from "./components/ControlledCheckbox/ControlledCheckbox";
import { ControlledSelectComponent } from "./components/ControlledSelect/ControlledSelect";
import { UncontrolledInputComponent } from "./components/UncontrolledInput/UncontrolledInput";
import { ReactMemo } from "./components/ReactMemo/ReactMemo";
import { UseMemo } from "./components/UseMemo/UseMemo";
import { UseMemoHelpReactMemo } from "./components/UseMemoHelpReactMemo/UseMemoHelpReactMemo";
import { UseCallback } from "./components/UseCallback/UseCallback";
import { UseState } from "./components/UseState/UseState";
import { UseEffectSync } from "./components/UseEffectSync/UseEffectSync";
import { UseEffectAsync } from "./components/UseEffectAsync/UseEffectAsync";
import { UseEffectAsyncClock } from "./components/UseEffectAsyncClock/UseEffectAsyncClock";

function App() {
  type PageTitlePropsType = {
    title: string
  }

  function PageTitle(props: PageTitlePropsType) {
    return <h3>{props.title}</h3>
  }

  let [ratingValue, setRatingValue] = useState<RaitingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);
  let [customSelectValue, setCustomSelectValue] = useState<string>("none");

  const UncontrolledOnOff = React.memo(UncontrolledOnOffComponent);
  const ControlledOnOff = React.memo(ControlledOnOffComponent);
  const ControlledAccordion = React.memo(ControlledAccordionComponent);
  const UncontrolledAccordion = React.memo(UncontrolledAccordionComponent);
  const ControlledRating = React.memo(ControlledRatingComponent);
  const UncontrolledRating = React.memo(UncontrolledRatingComponent);
  const ControlledSelect = React.memo(ControlledSelectComponent);
  const UncontrolledInput = React.memo(UncontrolledInputComponent);
  const RefInput = React.memo(RefInputComponent);
  const ControlledInput = React.memo(ControlledInputComponent);
  const ControlledCheckbox = React.memo(ControlledCheckboxComponent);

  return <>
    <PageTitle title={"This is APP components:"}/>
    <div className="container">
      <UncontrolledOnOff/>
      <ControlledOnOff on={switchOn}
                       onChange={(on) => setSwitchOn(on)}/>
      <ControlledAccordion titleValue={"Controlled accordion"}
                           collapsed={accordionCollapsed}
                           onClick={setAccordionCollapsed}
                           items={[
                             {title: "Dimych", value: 1},
                             {title: "Valera", value: 2},
                             {title: "Artem", value: 3},
                           ]}
      />
      <UncontrolledAccordion titleValue={"Uncontrolled accordion"}/>
      <ControlledRating value={ratingValue}
                        onClick={setRatingValue}/>
      <UncontrolledRating/>
      <ControlledSelect/>
      <CustomSelect value={customSelectValue}
                    onChange={setCustomSelectValue}
                    items={[
                      {title: "none", value: 0},
                      {title: "Dimych", value: 1},
                      {title: "Valera", value: 2},
                      {title: "Artem", value: 3},
                    ]}/>
      <ControlledInput/>
      <UncontrolledInput/>
      <RefInput/>
      <ControlledCheckbox/>
      <ReactMemo/>
      <UseMemo/>
      <UseMemoHelpReactMemo/>
      <UseCallback/>
      <UseState/>
      <UseEffectSync/>
      <UseEffectAsync/>
      <UseEffectAsyncClock/>
    </div>
  </>
}

export default App;