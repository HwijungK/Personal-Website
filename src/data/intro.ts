import type {Introduction} from './types'
import github_logo from '../assets/github_logo.png'
import linkedin_logo from '../assets/linkedin_logo.webp'
import itch_logo from '../assets/itch_logo.svg'

export const intro: Introduction = {
  title: "Hi I'm Hwijung",
  links: [
    {
      name: "Github",
      link: "https://github.com/HwijungK",
      imgSrc: github_logo
    },
    {
      name: "Linkden",
      link: "https://www.linkedin.com/in/hwijungkim/",
      imgSrc: linkedin_logo
    },
    {
      name: "Itch.io",
      link: "https://gnlwnd1.itch.io/",
      imgSrc: itch_logo,
    }
  ],
  aboutMe: `
I'm a student at the University of California, Irvine


🐜 Majoring in Computer Science 🐜
🗄️ Member of Anteater API 🗄️ 🎲 Make Games And Music on Itch.io! 🎲
📚 Currently Working On: Simulations On Unity 📚
  `
}