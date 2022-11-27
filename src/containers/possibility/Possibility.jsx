import React from 'react'
import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
        
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibiilties are beyond our imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci 
          facere sit nam exercitationem, vel in ut tempore quod voluptatibus sunt aperiam sapiente veritatis iste sint laborum soluta provident esse.</p>
        <h4>Request Early Access To Get Startet</h4>
      </div>
    </div>
  )
}

export default Possibility



