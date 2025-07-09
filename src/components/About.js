import React,{useState} from "react"

export default function About() {
    const [btntext,setBtntext]= useState('Enable Dark Mode');
    const [style,setStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const toggleMode=()=>{
        if(style.color === 'black'){
            setStyle({
                color:'white',
        backgroundColor:'black'
            })
             setBtntext('Enable Light Mode')
        } 
        else{
            setStyle({
                color:'black',
        backgroundColor:'white'
            })
             setBtntext('Enable Dark Mode')
        }
    }
  return (
    <>
    <div className='container border ' style={style}>
        <h1>About US</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam obcaecati molestiae, cum corrupti eaque necessitatibus et at dolorum optio totam</p>
        <h2>And</h2>
        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate error reprehenderit at harum, explicabo itaque commodi dolorum nostrum la</p>
    </div>
    <button className='my-4 p-3 ms-5' onClick={toggleMode}>{btntext}</button>
    </>
  )
}
