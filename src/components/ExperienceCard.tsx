import React from 'react'
import {type Experience} from '../data/types'
import "./ExperienceCard.css"

export default function ExperienceCard(experience: Experience) {
  return <>
    <section className="section-card-container">
      <div className="section-card-date">
        {experience.startDate}-{experience.endDate}
      </div>
      <div className="section-card-org">
        <h4>
          {experience.organization}
        </h4>
        <i>{experience.position}</i>
        <p>{experience.description}</p>
      </div>
        <img className="section-card-img" src={experience.imgSrc} alt={experience.organization} />
    </section>
  </>
}