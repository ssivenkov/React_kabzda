import React, {useState} from "react";
import s from '../CustomSelect/CustomSelect.module.css'

type itemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: itemType[]
}

export const CustomSelect: React.FC<SelectPropsType> = (
    {
        value,
        onChange,
        items
    }
) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const collapsedAction = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={s.container}>
            <div onClick={collapsedAction}
                 className={s.select}
            >
                {value} {/*{items.find(el => el.title === value)}*/}
            </div>
            {collapsed && <CustomSelectOptions items={items}
                                               changeValue={onChange}
                                               collapsed={collapsed}
                                               setCollapsed={setCollapsed}
            />}
        </div>
    )
}

type CustomSelectOptionsType = {
    items: itemType[]
    changeValue: (value: any) => void
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

const CustomSelectOptions: React.FC<CustomSelectOptionsType> = (
    {
        items,
        changeValue,
        collapsed,
        setCollapsed
    }
) => {
    const clickItem = (title: string) => {
        changeValue(title)
        setCollapsed(!collapsed)
    }

    return <div className={s.optionContainer}>
        {items.map((item, index) =>
            <div key={index}
                 onClick={() => clickItem(item.title)}
                 className={s.option}
            >
                {item.title}
            </div>)
        }
    </div>
}