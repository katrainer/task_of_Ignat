import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean// need to fix any
    totalUsers: number // need to fix any
    addUserEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, addUserEnter, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error// need to fix with (?:)
    // const inputClass = name=''? s.error: '' // need to fix with (?:)

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={error ? inputClass : undefined}
                onKeyPress={addUserEnter}
            />
            <span>{error}</span>
            <button
                onClick={addUser}>add
            </button>
            <span>{totalUsers}</span>
            <div>{error && 'wrong name'}</div>
        </div>
    )
}

export default Greeting
