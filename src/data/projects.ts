import type {Project} from './types'
import natural_selection from "../assets/natural_selection.png"
import evac from "../assets/evac.png"
import rune_trek from "../assets/rune_trek.png"
import air_balloon from "../assets/airballoon.png"
import scheduler from "../assets/scheduler.png"

export const projects: Project[] = [
  {
    name: "Natural Selection Simulation",
    imgSrc: natural_selection,
    year: "2026",
    description: "Unity Simulation on `naturally selected` neural network driven creatures and subsequent sim analysis",
    link: "https://github.com/HwijungK/NaturalSelectionSim"
  },
  {
    name: "UCI Scheduler",
    imgSrc: scheduler,
    year: "2025",
    description: "Course planner for UCI Students showing all possible schedules",
    link: "https://github.com/HwijungK/UCI_Scheduler",
  },
  {
    name: "EVAC",
    imgSrc: evac,
    year: "2025",
    description: "RTS + Tower defence in space! Created during ZotJam 2025 Summer",
    link: "https://gnlwnd1.itch.io/evac",
  },
  {
    name: "Rune Trek",
    imgSrc: rune_trek,
    year: "2024",
    description: "Slay the Spire inspired deck-builder game! Created during Mini Jam 162: Heat",
    link: "https://gnlwnd1.itch.io/rune-trek"
  },
  {
    name: "Airballoon",
    imgSrc: air_balloon,
    year: "2024",
    description: "Score chasing arcade game! Created during ScoreSpaceJam 30. Won 1st place in Audio lol",
    link: "https://gnlwnd1.itch.io/airballoon",
  }
]
