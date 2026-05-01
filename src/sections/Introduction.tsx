import {intro} from '../data/intro'
import './Introduction.css'

function Introduction() {
  return<>
    <section className="introduction">
      <h1 id="intro-heading" className="typing-name">Hi <span className="title-accent-color">I'm</span> Hwi<span className="title-accent-color">jun</span>g<span className="title-shadow-only">e</span><span className="title-accent-color">Kim</span>&ensp;</h1>
      <svg id="arrow-1" width="10" height="10">
        <circle cx="5" cy="5" r="5" opacity="0.5" fill="#0a5050"/>
      </svg>
      <svg id="arrow-2" width="10" height="10">
        <circle cx="5" cy="5" r="5" opacity="0.5" fill="#0a5050"/>
      </svg>
      <svg id="arrow-3" width="30" height="30">
        <circle cx="15" cy="0" r="15" opacity="0.5" fill="#0a5050"/>
      </svg>
    </section>
    <section className="about-me">
      <h2 id="about">About Me</h2>
      <div className="about-me-container-container">
        <div className='about-me-container'>
          <p style={{whiteSpace: "pre-line"}}>{intro.aboutMe}</p>
          <img className='headshot' src={intro.headShot}></img>
        </div>
      </div>
      
    </section>
  </>
}

export default Introduction
