import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { Project } from './Project'
import { myProjects } from './Consts'
const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.secondary.dark,
        border: `0.25rem solid ${theme.palette.primary.light}`,
    },
    card: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        border: `0.25rem solid ${theme.palette.primary.light}`,
        margin: '2rem auto',
        minHeight: '15rem',
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    title: {
        marginTop: '2rem',
        textAlign: 'center',
    }
}))
export const Projects = () => {
    const styles = useStyles()
    return (
        <Container className={styles.container} id="projects">
            <Typography variant="h4" className={styles.title} gutterBottom>
                Proyectos
            </Typography>
            {
                myProjects.map((project, i) => (
                    <Grid
                        key={project.title}
                        container
                        xs={10}
                        spacing={4}
                        className={styles.card}
                        direction={i % 2 === 1 ? "row" : "row-reverse"}
                    >
                        <Project
                            flag={i % 2 === 1 ? true : false}
                            content={project}
                        />
                    </Grid>
                ))
            }
        </Container>
    )
}