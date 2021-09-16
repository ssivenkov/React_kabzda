import React, {useState, KeyboardEvent, useRef} from "react";
import s from '../CustomSelect/CustomSelect.module.css'

type itemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
}

export let CustomSelect: React.FC<SelectPropsType> = (
    {
        value,
        onChange,
        items,
    }
) => {
    const selectRef = useRef(null);

    const [unCollapsed, setUnCollapsed] = useState<boolean>(false)
    const [hoveredItemTitle, setHoveredItemTitle] = useState(value)
    const hoveredElement = items.find(i => i.title === hoveredItemTitle)

    const collapsedAction = () => {
        setUnCollapsed(!unCollapsed)
    }

    const onKeyUpCallback = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        switch (e.key) {
            case 'ArrowDown':
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title === value && items[i + 1]) {
                        setHoveredItemTitle(items[i + 1].title)
                        onChange(items[i + 1].title)
                    }
                }
                break;
            case 'ArrowUp':
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title === value && items[i - 1]) {
                        setHoveredItemTitle(items[i - 1].title)
                        onChange(items[i - 1].title)
                    }
                }
                break;
            case 'Enter':
                onChange(hoveredItemTitle);
                collapsedAction();
                break;
            case 'Escape':
                setHoveredItemTitle(value)
                setUnCollapsed(false);
                break;
            default:
                break;
        }
    }

    return (
        <div className={s.container}>
            <div onClick={collapsedAction}
                 className={s.select}
                 onKeyUp={onKeyUpCallback}
                 tabIndex={0}
                 ref={selectRef}
            >
                {value ? value : 'none'}
            </div>
            {unCollapsed && value && <CustomSelectOptions items={items}
                                                          changeValue={onChange}
                                                          unCollapsed={unCollapsed}
                                                          setUnCollapsed={setUnCollapsed}
                                                          hoveredElement={hoveredElement}
                                                          setHoveredItemTitle={setHoveredItemTitle}
                                                          selectRef={selectRef}
            />}
        </div>
    )
}

type CustomSelectOptionsType = {
    items: itemType[]
    changeValue: (value: any) => void
    unCollapsed: boolean
    setUnCollapsed: (collapsed: boolean) => void
    hoveredElement: any
    setHoveredItemTitle: (item: string) => void
    selectRef: any
}

let CustomSelectOptions: React.FC<CustomSelectOptionsType> = (
    {
        items,
        changeValue,
        unCollapsed,
        setUnCollapsed,
        hoveredElement,
        setHoveredItemTitle,
        selectRef
    }
) => {

    const clickItem = (title: string) => {
        changeValue(title)
        setUnCollapsed(!unCollapsed)
        selectRef.current.focus();
    }

    return <div className={s.positionContainer}>
        <div className={s.optionContainer}>
            {items.map((item, index) =>
                <div key={index}
                     onMouseEnter={() => setHoveredItemTitle(item.title)}
                     onClick={() => clickItem(item.title)}
                     className={` ${s.option} ${item === hoveredElement ? s.selected : ""} `}
                >
                    {item.title}
                </div>)
            }
        </div>
    </div>
}