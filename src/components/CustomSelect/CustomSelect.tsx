import React, { useState, KeyboardEvent, useRef, MutableRefObject } from "react";
import s from "../CustomSelect/CustomSelect.module.css"

type nameType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: Array<nameType>
}

export let CustomSelect: React.FC<SelectPropsType> = (
    {
        value,
        onChange,
        items,
    },
) => {
    const selectRef = useRef(null);

    const [unCollapsed, setUnCollapsed] = useState<boolean>(false)
    const [hoveredItemTitle, setHoveredItemTitle] = useState<string>(value)
    const hoveredElement = items.find(i => i.title === hoveredItemTitle)
    const [itemClicked, setItemClicked] = useState<boolean>(false)

    const collapsedAction = () => {
        setUnCollapsed(!unCollapsed)
    }

    const onKeyUpCallback = (e: KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case "ArrowDown":
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title === value && items[i + 1]) {
                        setHoveredItemTitle(items[i + 1].title)
                        onChange(items[i + 1].title)
                    }
                }
                break;
            case "ArrowUp":
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title === value && items[i - 1]) {
                        setHoveredItemTitle(items[i - 1].title)
                        onChange(items[i - 1].title)
                    }
                }
                break;
            case "Enter":
                onChange(hoveredItemTitle);
                collapsedAction();
                break;
            case "Escape":
                setHoveredItemTitle(value)
                setUnCollapsed(false);
                break;
            default:
                break;
        }
    }

    const collapsedCallback = (selectRef: MutableRefObject<any>) => {
        setHoveredItemTitle(value);
        setUnCollapsed(false);
        if (itemClicked) {
            setItemClicked(false)
            selectRef.current.focus()
        } else selectRef.current.blur()
    }

    return (
        <div className={s.container}>
            <div>Custom select</div>
            <div onClick={collapsedAction}
                 className={s.select}
                 onKeyUp={onKeyUpCallback}
                 onBlur={() => collapsedCallback(selectRef)}
                 tabIndex={0}
                 ref={selectRef}
            >
                {value ? value : "none"}
            </div>
            {unCollapsed && value && <CustomSelectOptions items={items}
                                                          changeValue={onChange}
                                                          hoveredElement={hoveredElement}
                                                          setHoveredItemTitle={setHoveredItemTitle}
                                                          setItemClicked={setItemClicked}
            />}
        </div>
    )
}

type CustomSelectOptionsType = {
    items: nameType[]
    changeValue: (value: string) => void
    hoveredElement: any
    setHoveredItemTitle: (item: string) => void
    setItemClicked: (itemClicked: boolean) => void
}

let CustomSelectOptions: React.FC<CustomSelectOptionsType> = (
    {
        items,
        changeValue,
        hoveredElement,
        setHoveredItemTitle,
        setItemClicked,
    },
) => {

    const clickItem = (title: string) => {
        changeValue(title)
        setItemClicked(true)
    }

    return <div className={s.positionContainer}>
        <div className={s.optionContainer}>
            {items.map((item, index) =>
                <div key={index}
                     onMouseEnter={() => setHoveredItemTitle(item.title)}
                     onMouseDown={() => clickItem(item.title)}
                     className={` ${s.option} ${item === hoveredElement ? s.selected : ""} `}
                >
                    {item.title}
                </div>)
            }
        </div>
    </div>
}