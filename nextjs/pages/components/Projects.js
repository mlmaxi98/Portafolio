import { Grid, makeStyles } from '@material-ui/core'
import { Project } from './Project'
import { myProjects } from './Consts'
const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        height: '100%'
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
}))
export const Projects = () => {
    const styles = useStyles()
    return (
        <Grid
            container
            direction="row"
            justify="center"
            //alignItems="stretch"
            xs={12}
            //spacing={2}
        >
            {
                myProjects.map((project, i) => (
                    <Grid
                        item
                        container
                        //md={6}
                        xs={12}
                        //spacing={8}
                        className={styles.container}
                        direction={i % 2 === 1 ? "row" : "row-reverse"}
                    >
                        <Project
                            key={project.title}
                            flag={i % 2 === 1 ? true : false}
                            content={project}
                        />
                    </Grid>
                ))
            }
        </Grid >
    )
}