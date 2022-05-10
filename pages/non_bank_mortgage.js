import React from "react";
import Meta from '@/layout/Meta';
import Head from "next/head";
import dynamic from "next/dynamic";
const NonBankRecomend = dynamic(() => import("../components/NonBankMortgage/NonBankRecomend"));
const NonBankCenter = dynamic(() => import("../components/NonBankMortgage/NonBankCenter"));

import {
    Container,
    EmBarBg,
    SectionTitleText,
    WrapContent,
    TextH5
} from "@/layout/Styles";
import styled from "styled-components";
import Image from "next/image";

const TextCenter = styled.div`
  display: block;
  max-width: 880px;
  width: 100%;
  p {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    color: white;
    line-height: 2;
  }
 `;

const BubbleAnimate = styled.div`
  position: absolute;
  left: -215px;
  bottom: 0;
  width: 162%;
  height: 100%;
  overflow: hidden;
  .bubble-animate {
    position: absolute;
    left: -215px;
    bottom: 0;
    width: 162%;
    height: 100%;
    overflow: hidden;
  }
  .circle {
    background:#0C5ADB;
    bottom: 0;
    position: absolute;
    border-radius: 50%;
  }
  .circle.small {
    width: 15px;
    height: 15px;
    opacity: 0.7;
  }
  .circle.small.square1 {
    left: 18%;
    top: 100%;
    -webkit-animation-name: smallBubble;
    animation-name: smallBubble;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.small.square2 {
    left: 36%;
    top: 100%;
    -webkit-animation-name: smallBubble;
    animation-name: smallBubble;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.small.square3 {
    left: 54%;
    top: 100%;
    -webkit-animation-name: smallBubble;
    animation-name: smallBubble;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.small.square4 {
    left: 72%;
    top: 100%;
    -webkit-animation-name: smallBubble;
    animation-name: smallBubble;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.small.square5 {
    left: 90%;
    top: 100%;
    -webkit-animation-name: smallBubble;
    animation-name: smallBubble;
    -webkit-animation-duration: 7s;
    animation-duration: 7s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.medium {
    width: 35px;
    height: 35px;
    opacity: 0.45;
  }
  .circle.medium.square1 {
    left: 21%;
    top: 100%;
    -webkit-animation-name: mediumBubble;
    animation-name: mediumBubble;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.medium.square2 {
    left: 42%;
    top: 100%;
    -webkit-animation-name: mediumBubble;
    animation-name: mediumBubble;
    -webkit-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 6s;
    animation-delay: 6s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.medium.square3 {
    left: 63%;
    top: 100%;
    -webkit-animation-name: mediumBubble;
    animation-name: mediumBubble;
    -webkit-animation-duration: 12s;
    animation-duration: 12s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 12s;
    animation-delay: 12s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.medium.square4 {
    left: 84%;
    top: 100%;
    -webkit-animation-name: mediumBubble;
    animation-name: mediumBubble;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 12s;
    animation-delay: 12s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.medium.square5 {
    left: 105%;
    top: 100%;
    -webkit-animation-name: mediumBubble;
    animation-name: mediumBubble;
    -webkit-animation-duration: 18s;
    animation-duration: 18s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 6s;
    animation-delay: 6s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.medium.square5 {
    left: 5%;
    top: 100%;
    -webkit-animation-name: mediumBubble;
    animation-name: mediumBubble;
    -webkit-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.large {
    width: 100px;
    height: 100px;
    opacity: 0.35;
  }
  .circle.large.square1 {
    left: 21%;
    top: 100%;
    -webkit-animation-name: bigBubble;
    animation-name: bigBubble;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 6s;
    animation-delay: 6s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.large.square2 {
    left: 42%;
    top: 100%;
    -webkit-animation-name: bigBubble;
    animation-name: bigBubble;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.large.square3 {
    left: 63%;
    top: 100%;
    -webkit-animation-name: bigBubble;
    animation-name: bigBubble;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 13s;
    animation-delay: 13s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.large.square4 {
    left: 84%;
    top: 100%;
    -webkit-animation-name: bigBubble;
    animation-name: bigBubble;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 9s;
    animation-delay: 9s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  .circle.large.square5 {
    left: 105%;
    top: 100%;
    -webkit-animation-name: bigBubble;
    animation-name: bigBubble;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-delay: 13s;
    animation-delay: 13s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  @-webkit-keyframes smallBubble {
    0% {
      top: 100%;
      margin-left: 10px;
    }

    25% {
      margin-left: -10px;
    }

    50% {
      margin-left: 10px;
    }

    75% {
      margin-left: -10px;
    }

    100% {
      top: 0;
      opacity: 0;
      margin-left: 0;
    }
  }
  @keyframes smallBubble {
    0% {
      top: 100%;
      margin-left: 10px;
    }
    25% {
      margin-left: -10px;
    }
    50% {
      margin-left: 10px;
    }
    75% {
      margin-left: -10px;
    }
    100% {
      top: 0;
      opacity: 0;
      margin-left: 0;
    }
  }
  @-webkit-keyframes mediumBubble {
    0% {
      top: 100%;
      margin-left: 15px;
    }
    25% {
      margin-left: -15px;
    }
    50% {
      margin-left: 15px;
    }
    75% {
      margin-left: -15px;
    }

    100% {
      top: 0;
      opacity: 0;
      margin-left: 0;
    }
  }
  @keyframes mediumBubble {
    0% {
      top: 100%;
      margin-left: 15px;
    }
    25% {
      margin-left: -15px;
    }
    50% {
      margin-left: 15px;
    }
    75% {
      margin-left: -15px;
    }
    100% {
      top: 0;
      opacity: 0;
      margin-left: 0;
    }
  }
  @-webkit-keyframes bigBubble {
    0% {
      top: 100%;
      margin-left: 20px;
    }
    25% {
      margin-left: -20px;
    }
    50% {
      margin-left: 20px;
    }
    75% {
      margin-left: -20px;
    }
    100% {
      top: 0;
      opacity: 0;
      margin-left: 0;
    }
  }
  @keyframes bigBubble {
    0% {
      top: 100%;
      margin-left: 20px;
    }
    25% {
      margin-left: -20px;
    }
    50% {
      margin-left: 20px;
    }
    75% {
      margin-left: -20px;
    }
    100% {
      top: 0;
      opacity: 0;
      margin-left: 0;
    }
  }
`;

const FeatureShape1 = styled.div`
  position: absolute;
  right: -72px;
  bottom: 0;
  z-index: 1;
  animation-name: rotateme;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  opacity: 0.45;
  
  @keyframes rotateme {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotateme {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const NonBankMortgage = () => {
    return (
        <>
            <Head>
                <title>משכנתא חוץ בנקאית - וסופייננס</title>
                <Meta
                    description="משכנתא חוץ בנקאית,הסירוב של הבנקים המסחריים,משכנתא חוץ בנקאית,גופים חוץ בנקאיים,ריבית בעת קבלת משכנתא חוץ בנקאית ,הלוואה חוץ בנקאית,שירות באמצעות יועץ משכנתאות ,משכנתא למוגבלים"
                />
            </Head>
            <WrapContent className="pt pb background-image background-image-non">
                    <BubbleAnimate>
                    <div className="circle small square1"/>
                    <div className="circle small square2"/>
                    <div className="circle small square3"/>
                    <div className="circle small square4"/>
                    <div className="circle small square5"/>
                    <div className="circle medium square1"/>
                    <div className="circle medium square2"/>
                    <div className="circle medium square3"/>
                    <div className="circle medium square4"/>
                    <div className="circle medium square5"/>
                    <div className="circle large square1"/>
                    <div className="circle large square2"/>
                    <div className="circle large square3"/>
                    <div className="circle large square4"/>
                </BubbleAnimate>
                <FeatureShape1>
                    <Image
                        data-aos="fade-right"
                        src="/feature-shape.webp"
                        alt="background-frame"
                        priority
                        width={605}
                        height={570}
                        placeholder="blur"
                        blurDataURL="/feature-shape.webp"
                    />
                </FeatureShape1>
                <SectionTitleText data-aos="zoom-out" style={{zIndex: "2"}}>
                    <h1 style={{color:"white"}}>משכנתא חוץ בנקאית</h1>
                </SectionTitleText>
                <EmBarBg data-aos="zoom-out" style={{zIndex: "2"}}/>
                <Container className="pt3" style={{zIndex: "2"}}>
                    <TextCenter>
                        <p>רוב הציבור פונה לבנקים המסחריים ומקבל מהם משכנתא לכמה שנים ובתנאים פיננסיים שסוכמו עם הבנק, אך יש מצבים שבהם הלקוחות אינם מקבלים אישור לקבלת משכנתא ולכן הם פונים לגורמים חוץ בנקאיים כדי לקבל זאת. </p>
                    </TextCenter>
                </Container>
            </WrapContent>
            <NonBankCenter/>
            <NonBankRecomend/>
            <TextH5 data-aos="fade-up">קשה לכם לקבל החלטות בנושא המשכנתא ? בשביל זה אנו כאן בשבילכם. </TextH5>
        </>
    )
}

export default NonBankMortgage
