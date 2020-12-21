import React from 'react'
import './services.scss'
import {Link} from "react-router-dom";

const Services = (props) => (
    <section className="services">
        <div className="container">
            <h2 className="services__title title">Услуги по уголовным и гражданским делам</h2>
            <ul className="services__list">
                {props.services.map((item, i) =>
                <li className="services__item" key={i}>
                    <Link className="services__link" to={item.link}>{item.title}</Link>
                </li>)}
                <h2 className="services__title subtitle">Услуги по делам:</h2>
                {props.services2.map((item, i) =>
                <li className="services__item" key={i}>
                    <Link className="services__link" to={item.link} key={i}>{item.title}</Link>
                </li>)}
            </ul>
        </div>
    </section>
)

export default Services
