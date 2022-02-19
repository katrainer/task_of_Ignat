import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestAPI";

type RequestType = {}
export const Request: React.FC<RequestType> = () => {
    const [text, setText] = useState(null)
    const [checked, setChecked] = useState<boolean>(false)
    const onclickHandler = () => {
        RequestAPI.checkbox(checked).then(data => {
            setText(data.data.errorText)
        }).catch(error => error.response ? setText(error.response.data.errorText) : setText(error.message))
    }
    return <div>
        <h2>{text || 'Press Button!'}</h2>
        <SuperButton onClick={onclickHandler}>Some button</SuperButton>
        <SuperCheckbox
            checked={checked}
            onChangeChecked={setChecked}>
            Some checkbox
        </SuperCheckbox>
    </div>

}