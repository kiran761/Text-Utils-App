// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle={
        color:props.mode === 'dark' ? 'white':'#042743' ,
        backgroundColor : props.mode === 'dark' ? '#042743': 'white',
        
        
       }


    return (
        <>
            <div className="container" style={myStyle} >
                <h1 className=" my-3 ">About Us</h1>
                <div className="accordion px-2 py-2" id="accordionPanelsStayOpenExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                               <strong> Upper Text</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse ">
                            <div className="accordion-body" style={myStyle}>
                                Converts all characters in the text to uppercase.
                                    Useful for standardizing text or emphasizing certain words or phrases.
                                 </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong> Lower Text</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body" style={myStyle}>
                                Converts all characters in the text to lowercase.
                                    Useful for standardizing text or making it more readable.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" >
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong> TextUtils Free to Use</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body" style={myStyle}>
                                With Text Utils, users can quickly and efficiently modify text to suit their needs. Whether it's transforming text to uppercase or lowercase, or cleaning it up for clarity, Text Utils provides a user-friendly solution for text manipulation tasks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
