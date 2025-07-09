import { useState } from 'react'
export default function TextForm(props) {
  const HandleChange = (event) => {
    console.log('changing')
    setText(event.target.value);
  }
  const HandleUpperCase = () => {
    console.log('upperClicked')
    let NewText = text.toUpperCase();
    setText(NewText);
  }
   const HandleLowerCase = () => {
    let NewText = text.toLowerCase();
    setText(NewText);
  }
   const HandleRemove = () => {
    setText(' ');
  }
  const HandleCopy=()=>{
    navigator.clipboard.writeText(text).then(()=>{
      console.log('Copied text:', text);
    props.showAlert("Copied to clipboard" , 'success');
    })
  }
  const HandleReverse = ()=>{
    const reverseText = text.split(" ").reverse().join(" ")
    setText(reverseText);
    props.showAlert("Text Reversed" , 'success');
  }
  const HandleExtraSpace = ()=>{
 const newText = text.replace(/\s+/g," ").trim()
 setText(newText)
  }

  const [text, setText] = useState('')
  return (
    <>
      <main>
        <h2 className='textBox ms-3' >Text Box</h2>
        <section id='Home'>
          <textarea id="myBox" value={text} onChange={HandleChange} placeholder='Enter text here' />
          <div className="buttonGroup border-start">
          <button className='Button' onClick={HandleUpperCase}>Convert to Upper Case</button>
          <button className='Button' onClick={HandleLowerCase}>Convert to Lower Case</button>
          <button className='Button' onClick={HandleExtraSpace}>Remove ExtraSpace</button>
          <button className='Button' onClick={HandleReverse}>Reverse Text</button>
          <button className='Button' onClick={HandleCopy}>Copy Text</button>
          <button className='Button' onClick={HandleRemove}>Clear Text</button>
          </div>        
        </section>
      <section className="summary ms-5 ">
        <h3>Text Summary</h3>
        <div className="wordCounting">
          <p>{text.trim().split(/\s+/).filter(Boolean).length} words  {text.trim().length} Characters</p>
        <h4>Time to read the text</h4>
          <p>{0.008 * text.split("").length} seconds</p>
          <h1>Preview</h1>
          <p>{text.length > 0 ? text : 'Enter something in textbox to preview'}</p>
        </div>
      </section>
      </main>
    </>
  )
}

