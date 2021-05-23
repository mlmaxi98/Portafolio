import { Grid } from '@material-ui/core'
import { Project } from './Project'
import { myProjects } from './Consts'
export const Projects = () => {
    return (
        <Grid
            container
        >
            {
                myProjects.map((project, i) => (
                    <Project
                        key={i}
                        flag={i % 2 === 1 ? true : false}
                        content={project}
                    />
                ))
            }
        </Grid>
    )
}