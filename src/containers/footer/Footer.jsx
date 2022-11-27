import React from 'react'
import "./footer.css"
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to be included in the future?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>100 wallaby way, blah blah, All rights reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2021, blah blah blah</p>
      </div>
    </div>
  )
}

export default Footer
