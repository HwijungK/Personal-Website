import React from 'react';
import {experiences} from '../data/experiences'
import ExperienceCard from '../components/ExperienceCard';

function Experiences() {
  return <>
    {experiences.map((e) => {
      return ExperienceCard(e)
    })}
  </>
}

export default Experiences