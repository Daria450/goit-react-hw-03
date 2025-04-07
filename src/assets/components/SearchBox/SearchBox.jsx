import React from 'react'
import s from './SearchBox.module.css'

const SearchBox = () => {
    return (
        <>
            <label htmlFor="search" className={s.label}>Find contacts by name <input type="text" id='search' /></label>

        </>
    )
}

export default SearchBox