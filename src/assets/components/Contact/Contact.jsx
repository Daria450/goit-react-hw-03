import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css'

const Contact = ({ name, number }) => {
    return (
        <>

            <ul className={s.ul}>
                <li >
                    <IoPerson />
                    <p>{name}</p>
                </li>
                <li>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </li>
            </ul>


            <button>Delete</button>
        </>
    )
}

export default Contact