import React from 'react'
import { useState } from 'react';

function Text(props) {
    const makeUppercase = () => {
        console.log("Uses Concept of Use State")
    }
    const [text, settext] = useState("hello")
    const handleOnChange = (event) => {
        text(settext(event.target.value))
    }
    const convertToUppercase = () => {
        settext(text.toUpperCase())
    }
    const convertToLowercase = () => {
        settext(text.toLowerCase())
    }

    return (
        <>
            <div className={`container bg-${props.theme === "dark" ? "secondary" : "info"} border border-white my-3 py-5`}>
                <div className="form-floating">
                    <textarea onChange={handleOnChange} value={text} rows="20" style={{height:"200px"}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2">Enter text here</label>
                    <button className={`btn  btn-${props.theme === "dark" ? "dark" : "primary"} my-3 mx-3 bg`} onClick={convertToUppercase}>Convert to uppercase</button>
                    <button className={`btn  btn-${props.theme === "dark" ? "dark" : "primary"} my-3 mx-3 bg`} onClick={convertToLowercase}>{props.buttonOne}</button>
                </div>
            </div>
        </>
    )
}

export default Text