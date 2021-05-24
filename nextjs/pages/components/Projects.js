import { Grid } from '@material-ui/core'
import { Project } from './Project'
import { myProjects } from './Consts'
export const Projects = () => {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            xs={12}
            spacing={2}
        >
            {
                myProjects.map((project, i) => (
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Project
                            key={project.title}
                            flag={i % 2 === 1 ? true : false}
                            content={project}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}