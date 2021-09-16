import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";

export type AffairPriorityType = 'High' | 'Middle' | 'Low'
export type AffairType = AffairTypeProps[]
export type AffairTypeProps = {
    _id: number
    name: string
    priority: FilterType
}
export type FilterType = 'ALL' | AffairPriorityType

const defaultAffairs: AffairType = [
    {_id: 1, name: 'React', priority: 'High'},
    {_id: 2, name: 'anime', priority: 'Low'},
    {_id: 3, name: 'games', priority: 'Low'},
    {_id: 4, name: 'work', priority: 'High'},
    {_id: 5, name: 'html & css', priority: 'Middle'},
    {_id: 6, name: 'porn', priority: 'Low'}
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): AffairType=> {
    if (filter === 'High') {
        return affairs.filter((t) => t.priority === 'High')
    } else if (filter === 'Middle') {
        return affairs.filter((t) => t.priority === 'Middle')
    } else if (filter === 'Low') {
        return affairs.filter((t) => t.priority === 'Low')
    } else {
        return affairs
    }
}
//хули не работает
export const deleteAffair = (affairs: AffairType, _id: number): AffairType => {
    return affairs.filter(t=>t._id!==_id)

}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('ALL')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
