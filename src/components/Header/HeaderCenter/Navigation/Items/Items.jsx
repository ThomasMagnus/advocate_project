import React from 'react'
import {MenuContext} from "../../../../../App";
import './items.scss'
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <MenuContext.Consumer>
            {value => (
                value.map((item, i) => {
                    return (
                        <li className={props.class} key={i}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    )
                })
            )}
        </MenuContext.Consumer>
    )
}

export default Items
