import React ,{useState}from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("you have clicked " + text)
 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase" , "success ")
        
    }
    //to make it mutable
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success ")

    }
    const handleClearClick = ()=>{
        let newText = (" ");
        setText(newText)
        props.showAlert("Text cleared", "success ")

    }
    //speaks the text
    const handleSpeechClick=()=>{
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("speech activated", "success ")

    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied ", "success ")

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed", "success ")

    }
 
    
    const [text, setText] = useState('  ')
  return (
    <>
    
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>  
          <h2>{props.heading}</h2>
          <div className="mb-3" >
              <textarea
                  className="form-control"
                  value = {text}
                  id="myBox"
                  rows="8"
                  onChange={handleOnChange}
                  style={{backgroundColor:props.mode === 'light'?'white':'black',color:props.mode==='dark'?'white':'black'}}
                  
              ></textarea>
              <button className="btn btn-primary my-3"  onClick={handleUpClick}>Convert To Upper Case</button>
              <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert To Lower Case</button>
              <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear Text</button>
              <button className="btn btn-primary mx-4" onClick={handleSpeechClick}>Text to Speech</button>
              <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-success mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
             
          </div>
      </div>
      <div className="container my-2 " style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to display here "}</p>
      </div>
      </>   
  );
}


