import type {Introduction} from './types'
import github_logo from '../assets/github_logo.png'
import linkedin_logo from '../assets/linkedin_logo.webp'
import itch_logo from '../assets/itch_logo.svg'
// import download_logo from '../assets/download.png'
import headshot from '../assets/headshot.jpeg'
import abt_me_drawing from '../assets/abt_me_drawing.png'

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
    },
    // {
    //   name: "Resume",
    //   link: "/Resume.pdf",
    //   imgSrc: download_logo
    // }
  ],
  aboutMe: `
Hello there. I'm a CS major at UC Irvine!

What I do:
- I'm very involved in ICSSC, and I co-lead Anteater API, an open source API that provides university data to thousands of students
- I do undergraduate research under Mark Xu in the Grace Lee Lab, where i use bioinformatics methods to analyze repetitive self-duplicating sequences in DNA called Transposable elements

Some hobbies:
- I'm very involved in ICSSC, and I co-lead Anteater API, an open source API that provides university data to thousands of students
- I do undergraduate research under Mark Xu in the Grace Lee Lab, where i use bioinformatics methods to analyze repetitive self-duplicating sequences in DNA called Transposable elements

Some hobbies:
- 
- I'm very involved in ICSSC, and I co-lead Anteater API, an open source API that provides university data to thousands of students
- I do undergraduate research under Mark Xu in the Grace Lee Lab, where i use bioinformatics methods to analyze repetitive self-duplicating sequences in DNA called Transposable elements

Some hobbies:
- I always try to find time to read fiction, and am proud to be one of the few people who borrow books from the Langson Library
- When I can no longer bear to code, much of my time is spent cooking, working out, or taking aim-less walks
- I enjoy drawing, and music composition, a relic of my game dev days

Take a look at some of my professional experiences below!
  `,
  headShot: headshot,
  drawing: abt_me_drawing
}