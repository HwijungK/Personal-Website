import {type Experience} from '../data/types'
import "./ExperienceCard.css"

export default function ExperienceCard(experience: Experience) {
  return <>
    <a
      className="section-card-container"
      href={experience.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${experience.organization}`}
    >
      <div className="section-card-date-body-container">
        <div className="section-card-date">
          [{experience.startDate}-{experience.endDate}]
        </div>
        <div className="section-card-body">
          <h4>
            {experience.organization}
          </h4>
          <i>{experience.position}</i>
          <p>{experience.description}</p>
        </div>
      </div>
      <img className="section-card-img" src={experience.imgSrc} alt={experience.organization} />
    </a>
  </>
}
