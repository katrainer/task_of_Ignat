import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (name.trim() === '') ? s.error : undefined

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <SuperButton onClick={addUser} disabled={!!error}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
