import { About, Navbar, Projects } from './components'
import { Fade } from 'react-reveal'
import { makeStyles, useMediaQuery } from '@material-ui/core'
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
      <Projects />
      {/* <ContactMe /> */}
      {/* <Footer /> */}
    </div>
  )
}
export default index

