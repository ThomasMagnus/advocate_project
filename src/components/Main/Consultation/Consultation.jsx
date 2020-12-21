import React from "react";
import './consultation.scss'

const Consultation = () => {
    return (
        <section className="consultation">
            <div className="container">
                <h2 className="consultation__title title">Юридические консультации</h2>
                <div className="consultation__desc">
                    <p className="consultation__text">Практически каждый человек в своей повседневной жизни сталкивается
                    с теми или иными правовыми вопросами. Рядовому гражданину тяжело ориентировать в правовых терминах,
                    в связи с этим помощь квалифицорованного адвоката является бесспорно необходимой а порой и жизненно
                    важной! Не стоит полагаться на волю случая или любому попавшемуся адвокату предлогающему Вам многое за малое,
                    это ваша свобода и ваши средства.</p>
                    <div className="consultation__img">
                        <img src="./img/podrobnee-o-termine-advokat.jpg" alt="консультация"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consultation
