import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const Slider = ({ images, classes }) => {
    return (
        <Swiper
            navigation
            pagination={false}
            autoHeight={false}
            loop
            effect="fade"
            grabCursor
        //autoplay={{ "delay": 2500, "disableOnInteraction": false }}
        >
            {
                images.map(image =>
                    <SwiperSlide>
                        <img
                            src={image}
                            alt='This is a image'
                            className={classes.image}
                        />
                    </SwiperSlide>)
            }
        </Swiper>
    )
}

export default Slider