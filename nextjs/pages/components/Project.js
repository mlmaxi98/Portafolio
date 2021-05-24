import { Chip, Grid, makeStyles, Typography } from '@material-ui/core'
import { Fade } from 'react-reveal'
import Slider from './Slider'

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
export const Project = ({ flag, content }) => {
    const styles = useStyles()
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Fade
                //left={flag}
                //right={!flag}
                >
                    <Slider
                        images={content.images}
                        classes={styles}
                    />
                </Fade>
            </Grid>
            <Grid
                item
                container
                direction="column"
                justify="space-between"
                alignItems="stretch"
                xs={12}
                sm={6}
            //spacing={2}
            >
                <Grid item xs>
                    <Typography variant="h4">
                        <Fade
                        //left={!flag}
                        //right={flag}
                        >
                            {content.title}
                        </Fade>
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
            </Grid>
        </>
    )
}

