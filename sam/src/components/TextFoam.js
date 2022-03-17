import React, {useState} from 'react'



export default function TextFoam(props) { 
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Success")
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","Success")
    }

    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
        props.showAlert("All text erased","Success")
    }
    
    const handleToogleClick =()=>{
        let newText = (text)
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">  
        <textarea className="form-control" value={text} style={{ backgroundColor:props.mode === 'dark'?'#013466e':'white', color:props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="6"></textarea>
       </div>
       <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
       <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Erase Text</button>
       <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleToogleClick}>Toogle Text</button>
    </div>

    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter( (element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter( (element)=>{return element.length!==0}).length} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the above textarea to preview it here"}</p>
    </div>
    </>
  )
}
