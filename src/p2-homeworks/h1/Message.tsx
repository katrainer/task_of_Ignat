import React from 'react'
import s from "./Message.module.css";

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={s.bubble_container}>
            <img src={props.avatar} alt="avatar image"/>
            <div className={s.bubble}>
                <p>{props.name}</p>
                <p>{props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
