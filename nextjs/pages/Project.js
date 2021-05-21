import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        background: '#f43456',
    },
    image: {
        width: '100%'
    }
}))
const Card = ({ flag, content }) => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction={flag ? "row" : "row-reverse"}
            justify="space-around"
            alignItems="center"
            spacing={3}
        >
            <Grid item xs={4}>
                <img
                    src={content.images}
                    alt='This is a image'
                    className={classes.image}
                />
            </Grid>
            <Grid item xs={6}>

                <Grid container direction="column" justify="space-around" alignItems="center" spacing={3}>
                    <Grid item xs>
                        <Typography variant="h6">{content.title}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body1">
                            {content.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
const Project = (props) => {
    const classes = useStyles()
    return <Card flag={props.flag} content={props.content} />

}

export default Project
