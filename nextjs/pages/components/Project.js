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
    chip: {
        margin:theme.spacing(0.5)
    }
}))
export const Project = ({ flag, content }) => {
    const styles = useStyles()
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Fade>
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
            >
                <Fade>

                    <Typography variant="h4" gutterBottom>
                        {content.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {content.subtitle}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {content.description}
                    </Typography>
                    <div>
                        {
                            content.languages.map((lang) =>
                                <Chip
                                    key={lang}
                                    label={lang}
                                    className={styles.chip}
                                    size="small"
                                    variant="outlined"
                                />
                            )
                        }
                    </div>
                </Fade>
            </Grid>
        </>
    )
}

