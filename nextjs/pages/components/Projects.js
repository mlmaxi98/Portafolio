import { Grid, makeStyles } from '@material-ui/core'
import { Project } from './Project'
import { myProjects } from './Consts'
const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        height: '100%',
        margin: '0 auto',
        marginTop: '1rem',
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
            className={styles.container}
            direction="column"
            justify="center"
            alignItems="stretch"
            xs={11}
        //spacing={2}
        >
            {
                myProjects.map((project, i) => (
                    <Grid
                        item
                        container
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
        </Grid>
    )
}