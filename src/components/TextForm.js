    import React, { useState } from "react";
    export default function TextForm(props) {
    const [text, setText] = useState("Enter the text");
    // text="Upate the text here"; // this is wron way to update the text
    // setText("Upate the text here"); //this is the right way to update the text
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Updated.!!!!","success")
    };
    const handleLowClick = () => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Updated.!!!!","success")
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleSubStringClick = () => {
        let newText=text.substring(10);
        setText(newText);
        props.showAlert("SubString Updated.!!!!","success")
    };
    const handleClearText = () => {
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared.!!!!","success")
    };
    return (
        <>
        <div className="container"  style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea
            className="form-control my-2"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark' ? 'grey':'white',color: props.mode==='dark' ? 'white':'black'}}
           
            ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            UpperCase
            </button>
            <button className="btn btn-secondary mx-2" onClick={handleLowClick}>
            LowerCase
            </button>
            <button className="btn btn-dark mx-2" onClick={handleSubStringClick}>
            Substring 
            </button>
            <button className="btn btn-dark mx-2" onClick={handleClearText}>
            Clear 
            </button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split("").length} words {text.length} characters</p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
    }
        
