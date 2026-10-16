import {type Experience} from './types'
import icssc_log from "../assets/icssc.svg";
import vgdc_logo from "../assets/vgdc.jpg"

export const experiences: Experience[] = [
  {
    position: "Projects Co-Lead",
    organization: "ICSSC == AnteaterAPI",
    location: "UC, Irvine",
    startDate: "Nov 2025",
    endDate: "Present",
    description: `Anteater API provides university data such as enrollment metrics, grade distributions, and degree requirements \
      and is the backbone of UCI's most popular course planner, AntAlmanc.`,
    link: "https://anteaterapi.com/reference",
    imgSrc: icssc_log
  },
  {
    position: "Undergraduate Researcher",
    organization: "Grace Lee Lab",
    location: "UC, Irvine",
    startDate: "Sep 2026",
    endDate: "Present",
    description: `
    `,
    link: "https://grylee.science/",
    imgSrc: undefined
  },
  {
    position: "Game Developer",
    organization: "VGDC == AVA",
    location: "UC, Irvine",
    startDate: "Oct 2025",
    endDate: "Jun 20226",
    description: "Story driven RPG",
    link: "https://vgdc-uci.com/",
    imgSrc: vgdc_logo,
  }
]
