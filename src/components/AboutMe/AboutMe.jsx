import React from 'react'
import './aboutMe.scss'

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="aboutMe">
                <div className="container">
                    <div className="aboutMe__wrapper">
                        <h2 className='title'>Обо мне</h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe