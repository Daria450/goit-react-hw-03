import React from 'react'
import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

const ContactList = ({ contactItems }) => {
    return (
        <>

            <ul>{contactItems.map(item =>
                <li key={item.id} className={s.li}><Contact name={item.name} number={item.number} /></li>)}
            </ul>
        </>
    )
}

export default ContactList