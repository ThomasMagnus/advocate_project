import React from "react";
import { Link } from "react-router-dom";
import './consultationLiink.scss'

class ConsultationLink extends React.Component{

    componentDidMount() {
        this.items = document.querySelectorAll('.header__item a')
    }

    removeActiveClass = () => {
        this.items.forEach(item => item.parentElement.classList.remove('active'))
    }

    render() {
        return (
            <Link className='link' to="/consultation" onClick={this.removeActiveClass}>Записаться на консультацию</Link>
        )
    }
}


export default ConsultationLink
