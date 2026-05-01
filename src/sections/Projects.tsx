import {projects} from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section>
      <h2 id="projects">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard key={project.name} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
