import React from 'react'

export const SearchSign = ({ message, style, hero }) => {

    const strongLetters = <b>{hero}</b>

    if (message === "Search a hero") {
       return <div className={`alert alert-${style}`}> { message } </div>
    }

    return <div className={`alert alert-${style}`}> { message} {strongLetters} {"found"}</div>

}
