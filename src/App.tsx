import {Title, AboutMe} from './sections/Introduction'
import Experiences from './sections/Experiences'
import Projects from './sections/Projects'
import Header from './sections/Header'


export function App() {
  return <>
    <Header></Header>
    <Title />
    <div id="page-content">
      <AboutMe />
      <Experiences />
      <Projects />
    </div>
  </>
}
