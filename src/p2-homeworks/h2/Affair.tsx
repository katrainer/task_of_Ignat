import React from 'react'
import {AffairTypeProps} from './HW2'

type AffairPropsType = {
    _id: number
    affair: AffairTypeProps
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props._id)
    }

    return (
        <div>
            {props.affair.name}
            {'   '}
            {props.affair.priority}
            {'   '}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
