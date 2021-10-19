import React, {useState} from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    const [hidden, setHidden] = useState<boolean>(false)
    const classMenu = hidden ? `${s.Menu}` : `${s.Menu} ${s.Hidden}`
    return (
        <div className={s.Container}>
            <div className={classMenu}>
                <NavLink activeClassName={s.active} className={s.Navlink} to={PATH.PRE_JUNIOR}>PRE JUNIOR</NavLink>
                <NavLink activeClassName={s.active} className={s.Navlink} to={PATH.JUNIOR}>JUNIOR</NavLink>
                <NavLink activeClassName={s.active} className={s.Navlink} to={PATH.PLUS_JUNIOR}>PLUS_JUNIOR</NavLink>
            </div>
            <SuperButton
                className={s.Button}
                onClick={() => setHidden(!hidden)}>
                Menu</SuperButton>
        </div>

    )
}

export default Header
