import { Box, Chip, Grid, makeStyles, Typography } from '@material-ui/core'
import { Fade } from 'react-reveal'
import Slider from './Slider'

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(0.5),
    }
}))
export const Project = ({ content }) => {
    const styles = useStyles()
    return (
        <>
            <Grid item xs={12} sm={5}>
                <Fade>
                    <Slider images={content.images} />
                </Fade>
            </Grid>
            <Grid item xs={12} sm={7} >
                <Typography variant="h4" gutterBottom>
                    <Fade>{content.title}</Fade>
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {content.subtitle}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {content.description}
                </Typography>
                <Fade>
                    <Box>
                        {
                            content.languages.map((lang) =>
                                <Chip
                                    key={lang}
                                    label={lang}
                                    className={styles.chip}
                                    color="primary"
                                    size="small"
                                />
                            )
                        }
                    </Box>
                </Fade>
            </Grid>
        </>
    )
}

