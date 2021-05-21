import {
  Button,
  Typography
} from '@material-ui/core';
import Navbar from './Navbar'
import Projects from './Projects'
const Index = () => {
  return (
    <>
      <Navbar />
      <Projects />
      {/* <Typography variant="h4">
        Hello World!
      </Typography>
      <Button variant='contained' color='primary'>
        Hello
      </Button>
      <Button variant='contained' color='secondary'>
        World!
      </Button> */}
    </>
  )
}

export default Index

