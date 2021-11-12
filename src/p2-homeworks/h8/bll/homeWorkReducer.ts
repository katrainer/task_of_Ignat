import {UserType} from "../HW8"

type GeneralType = SortType | CheckType
type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckType = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: Array<UserType>, action: GeneralType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortArray = (x: any, y: any) => {
                if (x.name < y.name) {
                    return -1;
                }
                if (x.name > y.name) {
                    return 1;
                }
                return 0;
            }

            return action.payload === 'up' ? [...state.sort(sortArray)] : [...state.sort(sortArray).reverse()]
        }
        case 'check': {
            return state.filter(t => t.age > action.payload)
        }
        default:
            return state
    }
}