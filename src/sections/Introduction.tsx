import React from 'react'
import {intro} from '../data/intro'
import './Introduction.css'

function Introduction() {
  return<>
    <section className="introduction">
      <h1 id="intro-heading" className="typing-name">Hi I'm Hwi<span className="title-accent-color">jun</span>g</h1>
      <div className="contact-section">
        {intro.links.map((contact) => {
        return <a href={contact.link} target="_blank" rel="noopener noreferrer">
          {contact.imgSrc ? <img className="contact-logo" src={contact.imgSrc} alt={contact.name} /> : <>{contact.name}</>}
        </a>
        })}
      </div>
      <p style={{whiteSpace: "pre-line"}}>{intro.aboutMe}</p>
    </section>
  </>
}

export default Introduction