import { Button, Chip, Grid, makeStyles, Typography } from '@material-ui/core'
import { Fade } from 'react-reveal'
import Slider from './Slider'

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.primary.dark,
        margin: 'auto',
        marginTop: '1rem',
        color: theme.palette.secondary.contrastText,
    },
    info: {
        padding: '2rem'
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    }
}))
export const Project = ({ flag, content }) => {
    const classes = useStyles()
    return (
        <Grid
            className={classes.container}
            container
            direction={flag ? "row" : "row-reverse"}
            justify="space-between"
            alignItems="stretch"
            xs={11}
        >
            <Grid item xs={12} sm={6}>
                {/*<img src={content.images[0]} alt='' className={classes.image} />*/}
                <Slider images={content.images} classes={classes} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Fade left={flag} right={!flag}>
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                        spacing={2}
                        className={classes.info}
                    >
                        <Fade>
                            <Grid
                                item
                                xs
                            >
                                <Typography variant="h4">{content.title}</Typography>
                            </Grid>
                            <Grid
                                item
                                xs
                                className={classes.info}
                            >
                                <Typography variant="h6">{content.subtitle}</Typography>
                            </Grid>
                            <Grid
                                item
                                xs
                                className={classes.info}
                            >
                                <Typography variant="body1">
                                    {content.description}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1">
                                    {
                                        content.languages.map(lang =>
                                            <Chip
                                                color="secondary"
                                                label={lang}
                                            />
                                        )
                                    }
                                </Typography>
                            </Grid>
                        </Fade>
                    </Grid>
                </Fade>
            </Grid>
        </Grid>
    )
}

