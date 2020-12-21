import React from 'react'
import Items from "./Items/Items";
import './navigation.scss'

const Navigation = () => {
    const cls = 'header__item'

    return (
        <nav className="header__nav">
            <Items class={cls}/>
        </nav>
    )
}

export default Navigation
