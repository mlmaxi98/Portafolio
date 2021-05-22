import { About, Navbar, Project, myProjects } from './components'
import { Fade } from 'react-reveal'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  container: {
    //minHeight: '100vh',
    background: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
  },
}))
const index = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <About />
      {
        myProjects.map((project, i) => (
          <Project key={i} flag={i % 2 === 1 ? true : false} content={project} />
        ))
      }
    </div>
  )
}
export default index

