import React from 'react'
import {MenuContext} from "../../../../../App";
import './items.scss'
import { Link } from "react-router-dom";

class Items extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.items = null;
    }

    componentDidMount() {
        this.items = document.querySelectorAll('.header__item a')
        this.items[0].parentElement.classList.add('active')
    }

    removeActiveClass = () => {
        this.items.forEach(item => item.parentElement.classList.remove('active'))
    }

    addActiveClass = (e) => {
        this.removeActiveClass()
        const target = e.target
        target.parentElement.classList.add('active')
    }

    render() {
        return (
            <MenuContext.Consumer>
                {value => (
                    value.map((item, i) => {
                        return (
                            <li className={this.props.class} key={i}>
                                <Link to={item.link} onClick={this.addActiveClass}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                )}
            </MenuContext.Consumer>
        )
    }
}

export default Items
