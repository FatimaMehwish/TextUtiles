import React from 'react'

export default function Header(props) {
  return (
   <>
    <header className={`header navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   <ul>
    <li><a className={`text-${props.mode === 'light'?'dark':'light'}`} href="/">TextUtiles</a></li>
    <li><a className={`text-${props.mode === 'light'?'dark':'light'}`} href="/">Home</a></li>
    <li><a className={`text-${props.mode === 'light'?'dark':'light'}`} href="/">Contact</a></li>
   </ul>
   <div className="search">
     <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}` } htmlFor="flexSwitchCheckDefault"></label>
</div>
   </div>
   </header>
   </>
  )
}
