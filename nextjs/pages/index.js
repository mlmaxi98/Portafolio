import {
  Button,
  Typography
} from '@material-ui/core';
import Navbar from './Navbar'
import Project from './Project'
import About from './About'

const myProjects = [
  {
    title: 'Arcadepedia',
    subtitle: '',
    description: 'Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBa8fs_7yOcABfL0_S6bpEkLoxyrPS_ynoA&usqp=CAU',
    languages: [],
  },
  {
    title: 'Tech Store',
    subtitle: '',
    description: 'Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBa8fs_7yOcABfL0_S6bpEkLoxyrPS_ynoA&usqp=CAU',
    languages: [],
  },
  {
    title: 'More Trips!',
    subtitle: '',
    description: 'Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBa8fs_7yOcABfL0_S6bpEkLoxyrPS_ynoA&usqp=CAU',
    languages: [],
  },
  {
    title: 'Weather App',
    subtitle: '',
    description: [
      'Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).',
      'Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).',
      'Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).'
    ],
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBa8fs_7yOcABfL0_S6bpEkLoxyrPS_ynoA&usqp=CAU',
  },

]
const index = () => {
  return (
    <>
      <Navbar />
      <About />
      {
        myProjects.map((project, i) => (
          <Project flag={i % 2 === 1 ? true : false} content={project} />
        ))
      }
    </>
  )
}

export default index

