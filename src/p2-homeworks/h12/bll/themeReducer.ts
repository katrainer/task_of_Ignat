const initState = {
    theme: 'some'
};

type initStateType = typeof initState

export const themeReducer = (state = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "": {
            return {...state, theme: action.theme};
        }
        default: return {...state};
    }
};
type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => {
    return{
        type: '',
        theme
    }as const
};