import type {Project} from './types'
import githubLogo from '../assets/github_logo.png'
import itchLogo from '../assets/itch_logo.svg'

export const projects: Project[] = [
  {
    name: "GitHub Projects",
    imgSrc: githubLogo,
    year: "2026",
    description: "A collection of software projects, experiments, and coursework.",
    link: "https://github.com/HwijungK",
  },
  {
    name: "Itch.io Games",
    imgSrc: itchLogo,
    year: "2026",
    description: "Playable game projects and prototypes published on itch.io.",
    link: "https://gnlwnd1.itch.io/",
  },
]
