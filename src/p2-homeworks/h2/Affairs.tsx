import React from 'react'
import Affair from './Affair'
import {AffairType, AffairTypeProps, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairTypeProps) => (
        <Affair // should work
            key={a._id}
            _id={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('ALL')
    }
    const setHigh = () => {
        props.setFilter('High')
    }
    const setMiddle = () => {
        props.setFilter('Middle')
    }
    const setLow = () => {
        props.setFilter('Low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
