import React from 'react'
import './contacts.scss'
import ConsultationLink from "../ConsultationLink/ConsultationLink";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    styles = {
        firstStyle: {
            position: 'relative',
            overflow: 'hidden',
        },
        secondStyle: {
            color: '#eee',
            fontSize: '',
            position: 'absolute',
            top: '0'
        },
        thirdStyle: {
            color: '#eee',
            fontSize: '',
            position: 'absolute',
            top: '14px'
        },
        lastStyle: {
            position: "relative",
        }
    }

    render() {
        return (
            <section className="contacts">
                <div className="container">
                    <div className="contacts__wrapper">
                        <h2 className='title'>Контакты</h2>
                        <div className="contacts__content">
                            <address className='contacts__address'>Адрес: г. Москва, ул. Мира, д. 6, стр. 3, этаж 2, офис 205</address>
                            <div className="contacts__email"><span>Электронная почта: </span>
                                <a href="mailto:example@mail.ru">example@mail.ru</a>
                            </div>
                            <div className="contacts__tel">
                                <span>Телефон: </span>
                                <div className="telWrapper">
                                    <a className="contacts__linkTel" href="tel:+79265658399">+7 (926) 565 83 99</a>
                                    <div className="img">
                                        <img src="./img/whatsapp.svg" alt="whatsapp"/>
                                    </div>
                                </div>
                            </div>
                            <small className='contacts__small'>Ежедневно с 8 до 20 МСК</small>
                            <ConsultationLink/>
                        </div>
                    </div>
                    <div className="contacts__card">
                        <div style={this.styles.firstStyle}><a
                            href="https://yandex.ru/maps/10738/lubercy/?utm_medium=mapframe&utm_source=maps"
                            style={this.styles.secondStyle}>Люберцы</a><a
                            href="https://yandex.ru/maps/10738/lubercy/house/ulitsa_mira_6/Z04YfwZgSEADQFtvfXp3cXlqYw==/?ll=37.910153%2C55.660597&utm_medium=mapframe&utm_source=maps&z=16.65"
                            style={this.styles.thirdStyle}>Улица Мира, 6 —
                            Яндекс.Карты</a>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUEv2GZcA" width="560" height="400"
                                    frameBorder="1" allowFullScreen="true" style={this.styles.lastStyle}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts
