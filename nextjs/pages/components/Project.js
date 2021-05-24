import { Chip, Grid, makeStyles, Typography } from '@material-ui/core'
import { Fade } from 'react-reveal'
import Slider from './Slider'

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.primary.dark,
        margin: 'auto',
        marginTop: '1rem',
        color: theme.palette.secondary.contrastText,
        height: '100%'
    },
    info: {
        //padding: '0.5rem'
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    lang: {
        margin: '0.25rem'
    }
}))
export const Project = ({ flag, content }) => {
    const classes = useStyles()
    return (
        <Grid
            className={classes.container}
            container
            direction={!flag ? "row" : "row-reverse"}
            justify="space-between"
            xs
        >
            <Grid item xs={12} sm={6}>
                <Fade left={flag} right={!flag}>
                    <Slider
                        images={content.images}
                        classes={classes}
                    />
                </Fade>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Fade left={!flag} right={flag}>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Fade>
                            <Grid item xs>
                                <Typography variant="h4">
                                    {content.title}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h6">{content.subtitle}</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1">
                                    {content.description}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                justify="space-around"
                                xs
                            >
                                {
                                    content.languages.map(lang =>
                                        <Grid
                                            item
                                            container
                                            justify="center"
                                            xs
                                        >
                                            <Chip
                                                color="secondary"
                                                label={lang}
                                            />
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Fade>
                    </Grid>
                </Fade>
            </Grid>
        </Grid >
    )
}

