import type {Project} from '../data/types'
import './ProjectCard.css'

export default function ProjectCard(project: Project) {
  return (
    <a
      className="project-card-container"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name}`}
    >
      <div className="project-card-date-body-container">
        <div className="project-card-year">[{project.year}]</div>
        <div className="project-card-details">
          <h3 className="project-card-name">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
      <img className="project-card-img" src={project.imgSrc} alt={project.name} />
    </a>
  )
}
