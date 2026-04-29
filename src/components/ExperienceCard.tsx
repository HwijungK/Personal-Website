import React from 'react'
import {type Experience} from '../data/types'

export default function ExperienceCard(experience: Experience) {
  return <>
    <div>
      {experience.position}

      {experience.organization}

      {experience.startDate}-{experience.endDate}
    </div>
  </>
}