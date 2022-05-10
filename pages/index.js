import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import HomeBackgroundImg from "/public/banner-bg.svg";
import styled from "styled-components";
import { tablet, tabletMaxS } from "@/layout/screen-sizes";

const ContectIcon = dynamic(() => import("../components/Home/ContectIcon"));
const HomeAbout = dynamic(() => import("../components/Home/HomeAbout"));
const HomeWhy = dynamic(() => import("../components/Home/HomeWhy"));
const CarouselSwiper = dynamic(() => import("../components/Home/CarouselSwiper"));
const CarouselSwiperIcon = dynamic(() => import("../components/Home/CarouselSwiperIcon"));

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Col6, ContainerFluid, Row, Container } from "@/layout/Styles";
const HomeBackground = styled.div`
  padding: 0 !important;
  position: relative;
  min-height: 77vh;
  display: flex;
  align-items: center;
  z-index: 2;
  background: #00a8ff;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(34, 39, 187, 1) 0%,
    rgba(33, 36, 158, 1) 40%,
    rgba(16, 16, 117, 1) 100%
  );
  &&:after {
    background-image: url(${(props) => props.image.src});
    background-color: rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
    background-position: left center;
    content: "";
    position: absolute;
    top: 0;
    left: -400px;
    width: 900px;
    height: 900px;
    z-index: -1;
    opacity: 0.15;
    animation: rotation 50s linear infinite;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Banner = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const BannerInner = styled.div`
  span {
     max-width: 552px;
     width: 100%;
     height: 100%;
  }
   align-items: center!important;
     @media ${tablet} {
       .d-lg-flex {
        display: flex!important;
   }
`;
const BannerImg = styled.div`
  min-height: 700px;
  padding-top: 45px;
  width: 100%;
  height: auto;
  animation: MoveUpDown 2s linear infinite;
  position: relative;
  @keyframes MoveUpDown {
    0%,
    100% {
      top: 0;
    }
    50% {
      top: 10px;
    }
  }
`;
const BannerDetail = styled.div`
  top: 50%;
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
`;
const BannerTitle = styled.h1`
  color: #ffffff;
  font-size: 55px;
  font-weight: 600;
  line-height: 90px;
  margin: 0;
  @media screen and ${tabletMaxS} {
      text-align: center;
      font-size: 40px;
      line-height: 60px;
    }
  }
`;
const BannerP = styled.p`
  margin-bottom: 30px;
  margin-top: 20px;
  color: #a6b3ff;
  max-width: 600px;
  line-height: 2.1;
  @media screen and ${tabletMaxS} {
    text-align: center;
    max-width: 720px;
  }
`;
const Slogan = styled.div`
  display: inline-block;
  font-size: 22px;
  margin-bottom: 10px;
  color: #a6b3ff;
  font-weight: 500;
  @media screen and ${tabletMaxS} {
    display: block;
    text-align: center;
  }
`;

const index = () => {
  return (
    <div>
      <Head>
        <title>סוסופייננס</title>
        <meta name="description" content="home" />
          <link rel="alternate" href="https://soso.co.il/" hrefLang="he-il"/>
        <meta
          name="description"
          content="מחפשים הלוואה? תפנו רק אל מי שילווה אתכם לכל אורך התהליך ולא רק 'ילווה' לכם. אנו בסוסו פייננס נותנים ייעוץ וליווי פיננסי חוץ בנקאי כדי לעזור לכם להשיג ביטחון כלכלי אמיתי!"
        />
      </Head>
      <HomeBackground image={HomeBackgroundImg}>
        <Banner>
          <BannerInner>
            <ContainerFluid>
              <Row>
                <Col6>
                  <BannerImg>
                      <div
                       style={{
                          maxWidth: "1011px",
                          maxHeight: "644px",
                          position: "relative",
                          alignSelf: "center",
                         aspectRatio: "1011/644",
                       }}
                     >
                    <Image
                     data-aos="fade-left"
                      src="/banner-img1.webp"
                      alt="background-frame"
                     width={940}
                     height={600}
                      quality={100}
                      placeholder="blur"
                      blurDataURL="/banner-img1.webp"
                       priority
                    />
                      </div>
                  </BannerImg>
                </Col6>
              </Row>
            </ContainerFluid>
            <BannerDetail>
              <Container>
                <Row>
                  <Col6 />
                  <Col6>
                <Slogan >
                      סוסופייננס - נותנים כסף חכם!
                    </Slogan>
                    <BannerTitle >
                        תנו לנו לעזור לכם
                      <br />
                      <span>בתשלומי המשכנתא</span>
                    </BannerTitle>
                    <BannerP >
                        מכרז לבנקים - נבנה עבורכם תמהיל עם מסלולים המתאימים עבורכם באמצעות מומחי משכנתאות ונגיש אותו למכרז ריביות בין הבנקים כדי שתקבלו את ההצעה המשתלמת ביותר.
                    </BannerP>
                  </Col6>
                </Row>
              </Container>
            </BannerDetail>
          </BannerInner>
        </Banner>
      </HomeBackground>
      <ContectIcon />
      <HomeAbout />
      <HomeWhy />
      <CarouselSwiper />
      <CarouselSwiperIcon />
    </div>
  );
};
export default index;
