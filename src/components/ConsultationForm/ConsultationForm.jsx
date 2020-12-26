import React from 'react'
import './consultationForm.scss'

class ConsultationForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="consultationForm">
                <div className="container">
                    <div className="consultationForm__wrapper">
                        <h2 className='title'>Записаться на консультацию</h2>
                        <form className="consultationForm__form">
                            <label className='consultationForm__label'>
                                Представьтесь:
                                <input type="text" className='consultationForm__input name' name='name'/>
                            </label>
                            <label className='consultationForm__label'>
                                Ваш номер телефона:
                                <input type='number' className='consultationForm__input phone' name='phone'/>
                            </label>
                            <label className='consultationForm__label'>
                                Ваш email: <small>(если имеется)</small>
                                <input type="email" className='consultationForm__input email' name='email'/>
                            </label>
                            <label className='consultationForm__label'>
                                Ваш вопрос:
                                <textarea name="comment" className='consultationForm__textarea'/>
                            </label>
                            <button type="submit" className='consultationForm__btn'>Отправить</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ConsultationForm
