import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Fade } from 'react-reveal'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
    },
    image: {
        width: '100%'
    }
}))
const Card = ({ flag, content }) => {
    const classes = useStyles()
    return (
        <Fade left={flag} right={!flag}>
            <Grid
                container
                direction={flag ? "row" : "row-reverse"}
                justify="space-around"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={5}>
                    <Swiper
                        navigation
                        pagination={false}
                        autoHeight={false}
                        loop
                        effect="fade"
                        grabCursor
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                    >
                        {content.images.map(image =>
                            <SwiperSlide>
                                <img
                                    src={image}
                                    alt='This is a image'
                                    className={classes.image}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </Grid>
                <Grid item xs={5}>
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
        </Fade>
    )
}
export const Project = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <Card flag={props.flag} content={props.content} />
        </div>
    )

}