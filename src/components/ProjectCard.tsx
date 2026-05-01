import type {Project} from '../data/types'
import './ProjectCard.css'

export default function ProjectCard(project: Project) {
  return (
    <article className="project-card-container">
      <h3 className="project-card-name">{project.name}</h3>
      <a
        className="project-card-link"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name}`}
      >
        <img className="project-card-img" src={project.imgSrc} alt={project.name} />
      </a>
      <div className="project-card-details">
        <span className="project-card-year">{project.year}</span>
        <p>{project.description}</p>
      </div>
    </article>
  )
}
