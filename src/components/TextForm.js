import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here")

    const handleUpClick = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length!==0)
        props.showAlert("Converted to Upper Case","success")
    }

    const handleLoClick = () => {
        // console.log("Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length!==0)
        props.showAlert("Converted to Lower Case","success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }
    const handleClear = () => {
        // console.log("Button was clicked");
        if(text.length >0){
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")
        }
    }

    const wordCount =(text)=>{
        let r=/\s+\S+/;
        let numOfWords=text.split(r);
        return numOfWords.length;
    }

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>There are {text===""? 0 : wordCount(text)} words and {text.length} characters.</p>
                <p>You ll need around {0.08 * (text===""? 0 : wordCount(text))} minutes to read.</p>
                <h2>
                    Preview
                </h2>
                <p>{text}</p>
            </div>
        </>
    )
}
