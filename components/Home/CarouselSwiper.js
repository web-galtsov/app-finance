import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation,Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import dataTeam from "./DataTeam";
import {TiSocialFacebook} from "react-icons/ti";
import {
    WrapContent,
    Container,
    CarouselBox,
    CarouselBoxContect,
    SectionTitleText, EmBarBg
} from "@/layout/Styles";
import styled from "styled-components";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Scrollbar, Autoplay]);

const CarouselBoxTitle = styled.div`
  margin-top: 1.5rem !important;
  h4 {
    font-size: 20px;
    margin-top: 30px;
    font-weight: 700;
  }
  a {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    transition: all 0.4s ease 0s;
    cursor: pointer;
    border: 1px solid #2C3F98;
    width: 35px;
    height: 35px;
    line-height: 38px;
    border-radius: 50%;
    margin-top: 7px;
    background-color: #2A4098;
  }
  a:hover {
    color: #2C3F98 !important;
    text-decoration: none;
    transition: all 0.4s ease 0s;
    background-color: #fff;
    border: 1px solid rgba(44, 63, 152, 0);
  }
  span {
    color: #545454;
    font-weight: 500;
    font-size: 12px;
    display: block;
    padding-top: 4px;
  }
`;
 const CarouselBoxContectImg = styled.div`
     float: right;
     margin-left: 1rem!important;
   span img {
      width: 100%;
      border-radius: 50%;
      margin: auto;
   }
`;

export default function CarouselSwiper() {
    return (
        <WrapContent className="pt pb background-grey-light overflow">
            <div className="background-shape_2">
                <ul className="shape"><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/></ul>
            </div>
            <SectionTitleText data-aos="zoom-out">
                <h6>תעודת הוקרה</h6>
                <h1>מה אומר</h1>
                <h1>לקוחות ממליצים</h1>
            </SectionTitleText>
                <EmBarBg data-aos="zoom-out"/>
            <Container className="pt" data-aos="zoom-out-up" >
            <Swiper
                spaceBetween={10}
                effect={"EffectFade"}
                grabCursor={true}
                slidesPerView={3}
                autoplay
                pagination={{ clickable: true }}
                className="mySwiper1"
                breakpoints={{
                    "@0.00": {
                        "slidesPerView": 1,
                        "spaceBetween": 10
                    },
                    "@0.75": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "@1.00": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "@1.50": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    }
                }}
            >
                {dataTeam.map((obj) => {
                    return (
                        <SwiperSlide key={obj.id}>
                            <CarouselBox>
                                <CarouselBoxContect>
                                    <p>
                                        {obj.description}
                                    </p>
                                </CarouselBoxContect>
                                <CarouselBoxContectImg>
                                    <Image src={obj.img} width={obj.width} height={obj.height} alt={obj.alt}/>
                                </CarouselBoxContectImg>
                                <CarouselBoxTitle>
                                    <h4>{obj.title}</h4>
                                    <a href={obj.url} target="_blank" rel="noopener noreferrer">
                                        <TiSocialFacebook />
                                    </a>
                                    <span>{obj.data}</span>
                                </CarouselBoxTitle>
                            </CarouselBox>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </Container>
        </WrapContent>
    );
};
