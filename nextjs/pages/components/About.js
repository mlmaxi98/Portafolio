import { Box, Chip, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { techs } from './Consts'
const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.secondary.light,
        padding: '4vw 12vw',
        color: theme.palette.secondary.contrastText,
        //border: `0.25rem solid ${theme.palette.primary.light}`,
    },
    chip: {
        margin: theme.spacing(0.5),
    },

}))
export const About = () => {
    const styles = useStyles()
    return (
        <section className={styles.root} id="about">
            <Container>
                <Typography variant="h6" align="center" gutterBottom>
                    ¡Hola! Mi Nombre es Joaquín Cardozo, Soy un Full Stack Web Developer.
                </Typography>

                <Typography variant="body1" align="center" gutterBottom>
                    Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).
                </Typography>

                <Typography variant="body1" align="center" gutterBottom>
                    Algunas columnas tienen varios anchos definidos, causando que el layout cambie en el correspondiente breakpoint definido.
                </Typography>

                <Box>
                    {
                        techs.map((lang) =>
                            <Chip
                                key={lang}
                                label={lang}
                                className={styles.chip}
                                color="primary"
                            //size="small"
                            />
                        )
                    }
                </Box>
            </Container>
        </section>
    )
}
