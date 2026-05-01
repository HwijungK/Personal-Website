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
    description: "API providing university data to UCI students",
    link: "https://anteaterapi.com/reference",
    imgSrc: icssc_log
  },
  {
    position: "Game Developer",
    organization: "VGDC == AVA",
    location: "UC, Irvine",
    startDate: "Oct 2025",
    endDate: "Present",
    description: "Story driven RPG",
    link: "https://vgdc-uci.com/",
    imgSrc: vgdc_logo,
  }
]
