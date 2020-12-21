import React from 'react'
import { Link } from "react-router-dom";
import './myservices.scss'

class MyServices extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="myservices">
                <div className="container">
                    <div className="myservices__wrapper">
                        <h2 className='title'>Список услуг</h2>
                        <hr/>
                        <ul className='myservices__list'>
                            {this.props.services.map((item, i) =>
                                <li className="myservices__item" key={i}>
                                    <Link className="myservices__link" to={item.link}>{item.title}</Link>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default MyServices
