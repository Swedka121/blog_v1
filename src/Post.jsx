import React from 'react'
import "./sass/main.scss"
import { NavLink } from 'react-router-dom'
export default function Post (props) {
  return (
    <div className='Post'>
        <div className='top'></div>
        <div className='row'>
            <img className='img' src={props.img}></img>
            <NavLink to={"post/"+props.id}>
                <div className='text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div> 
            </NavLink>
        </div>
    </div>
  )
}
