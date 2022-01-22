const initState = {
    loading: false
}
export type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'PRELOADER': {
            return {loading: action.loading}
        }
        default:
            return {...state}
    }
}
type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: 'PRELOADER',
        loading,
    }
}