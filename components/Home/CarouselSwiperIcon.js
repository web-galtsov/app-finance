import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation,Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import { WrapContent,Container} from "@/layout/Styles";
import dataSliderIcons from "./DataIcons";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Scrollbar, Autoplay]);

export default function CarouselSwiperIcon() {

    return (
        <WrapContent className="pt3 pb2">
            <Container data-aos="fade-up">
                <Swiper
                    data-swiper-autoplay="1000"
                    spaceBetween={50}
                    effect={"EffectFade"}
                    grabCursor={true}
                    slidesPerView={6}
                    autoplay
                    pagination={{ clickable: true }}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "@0.75": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        },
                        "@1.00": {
                            "slidesPerView": 4,
                            "spaceBetween": 40
                        },
                        "@1.50": {
                            "slidesPerView": 5,
                            "spaceBetween": 50
                        }
                    }}
                >
                    {dataSliderIcons.map((obj) => {
                        return (
                            <SwiperSlide  key={obj.id}>
                                <Image src={obj.img} width={obj.width} height={obj.height} alt={obj.alt}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </WrapContent>
    );
};
