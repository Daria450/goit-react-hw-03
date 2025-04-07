import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import s from './ContactForm.module.css'

const ContactForm = () => {


    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };


    return (
        <>
            <Formik initialValues={{}} onSubmit={() => { }}>
                <Form className={s.form}>
                    <label htmlFor={nameFieldId} className={s.label}>Name <Field className={s.input} type="text" name="name" id={nameFieldId} /></label>

                    <label htmlFor={numberFieldId} className={s.label}>Number  <Field className={s.input} type="text" name="number" id={numberFieldId} /></label>

                    <button type="submit" onClick={handleSubmit}>Add Contact</button>
                </Form>
            </Formik>
        </>
    )
}

export default ContactForm