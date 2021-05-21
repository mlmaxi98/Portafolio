import { About, Navbar, Project, myProjects } from './components'
import { Fade } from 'react-reveal'
const index = () => {
  return (
    <>
      <Navbar />
      <About />
      {
        myProjects.map((project, i) => (
          <Project key={i} flag={i % 2 === 1 ? true : false} content={project} />
        ))
      }
    </>
  )
}
export default index

