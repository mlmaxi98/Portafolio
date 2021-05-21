import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.secondary.light,
        //padding: '4vw 12vw',
        color: theme.palette.secondary.contrastText,
    }
}))
export const About = () => {
    const classes = useStyles()
    return (
        <Grid
            className={classes.container}
            container
            direction="column"
            justify="space-around"
            alignItems="center"
        //spacing={1}
        >
            <Grid item xs={10} sm={6}>
                <Typography variant="body1" align="center" gutterBottom>
                    El fluid grid usa columnas que escalan y redimensionan el contenido. Un layout de fluid grid puede usar separaciones para determinar si el layout necesita cambiar dramaticamente.
            </Typography>
            </Grid>

            <Grid item xs={10} sm={6} >
                <Typography variant="body1" align="center" gutterBottom>
                    Los anchos de columna se aplican en todos los breakepoints (ej. xs y superiores).
            </Typography>
            </Grid>

            <Grid item xs={10} sm={6}>
                <Typography variant="body1" align="center" gutterBottom>
                    Algunas columnas tienen varios anchos definidos, causando que el layout cambie en el correspondiente breakpoint definido.
            </Typography>
            </Grid>
        </Grid>
    )
}