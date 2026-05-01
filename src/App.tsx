import Introduction from './sections/Introduction'
import Experiences from './sections/Experiences'
import Projects from './sections/Projects'
import Header from './sections/Header'


export function App() {
  return <>
    <Header></Header>
    <div id="page-content">
      <Introduction/>
      <Experiences />
      <Projects />
    </div>

  </>
}
