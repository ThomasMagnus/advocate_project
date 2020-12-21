import React from "react";
import Items from "../../Header/HeaderCenter/Navigation/Items/Items";
import './footerContent.scss'

const FooterContent = () => {
    const cls = 'footer__item'

    return (
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <ul className="footer__list">
                        <Items class={cls}/>
                    </ul>
                </div>
                <div className="footer__right">
                    <p className="footer__name">Адвокат: Власенко Максим Алексеевич</p>
                    <address>Адрес: г. Москва, ул. Мира, д. 6, стр. 3, этаж 2, офис 205</address>
                    <div className="footer__tel"><span>Телефон: </span>
                        <a className="footer__linkTel" href="tel:+79265658399">+7 (926) 565 83 99</a>
                    </div>
                    <p className="footer__text">Часы работы: с 10.00 до 20.00</p>
                </div>
            </div>
        </div>
    )
}

export default FooterContent
