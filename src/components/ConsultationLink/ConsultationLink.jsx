import React from "react";
import { Link } from "react-router-dom";
import './consultationLiink.scss'

const ConsultationLink = () => (
    <Link className='link' to="/consultation">Записаться на консультацию</Link>
)

export default ConsultationLink
