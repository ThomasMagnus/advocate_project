import React from 'react'
import Navigation from "./Navigation/Navigation";
import './headerCenter.scss'

const HeaderCenter = () => {
    return (
        <div className="header__center" style={{backgroundColor: "url('./img/buisness.jpg') center center/cover no-repeat"}}>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src="./img/justice.png" alt="logo"/>
                    </div>
                    <div className="header__advantage">
                        <div className="header__main">
                            <h1 className="header__title">Адвокат №1 в Москве!</h1>
                            <h2 className="header__subtitle">Власенко Максим Алексеевич - ваша правовая защита!</h2>
                            <a href="tel:+79265658399" className="header__tel">+7 (926) 565 83 99</a>
                            <p className="header__text">Звоните ежедневно!</p>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCenter
