import { Swiper, SwiperSlide } from 'swiper/react';
import { makeStyles } from '@material-ui/core'

import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const useStyles = makeStyles(theme => ({
    container: {
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    }
}))
const Slider = ({ images }) => {
    const styles = useStyles()
    return (
        <Swiper
            navigation={false}
            pagination={false}
            autoHeight={false}
            loop
            effect="fade"
            grabCursor
            autoplay={{ "delay": 2500, "disableOnInteraction": false }}
        >
            {
                images.map((image, i) =>
                    <SwiperSlide key={i}>
                        <img
                            src={image}
                            alt="This is a image"
                            className={styles.image}
                        />
                    </SwiperSlide>)
            }
        </Swiper>
    )
}

export default Slider
