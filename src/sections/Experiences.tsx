import {experiences} from '../data/experiences'
import ExperienceCard from '../components/ExperienceCard';
import './Experiences.css'

function Experiences() {
  return <>
    <section>
      <h2>
        Experiences
      </h2>
      <div className="experiences-container">
        {experiences.map((e) => {
        return <ExperienceCard key={e.organization} {...e}></ExperienceCard>
        })}
      </div>
      
    </section>
    
  </>
}

export default Experiences
