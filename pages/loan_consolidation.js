import React from "react";
import Meta from '@/layout/Meta';
import Head from "next/head";
import {loanData} from "../components/LoanConsolidation/DataLoan";
import dynamic from "next/dynamic";
const Particle = dynamic(() => import("../components/LoanConsolidation/Particle"));
import {
    WrapContent,
    Container,
    EmBarBg,
    SectionTitleText,
    TextH5
} from "@/layout/Styles";
import { LargeIconListItem } from "../components/MortgageAdvice/LargeIconListItem";
import {RegulaIcon} from "../components/MortgageAdvice/RegulaIcon";
import styled from "styled-components";
import {tabletMax} from "@/layout/screen-sizes";

export const WrapContentHead = styled.div`
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(255, 255, 255);
      position: relative;
      height: auto;
     overflow: hidden;
     div >  #tsparticles canvas {
    position: relative;
  }
    @media screen and ${tabletMax} {
      padding-left: 15px;
      padding-right: 15px;
   }
 `;

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

const LoadConsolidation = () => {
    return (
        <>
            <Head>
                <title>איחוד הלוואות -וסופייננס</title>
                <Meta
                    description="בכל משפחה המצבים הכלכליים משתנים מעת לעת עקב סיבות כאלו ואחרות. כאשר יש ללקוחות כמה וכמה הלוואות שהם לוו לאורך הזמן קשה להם לעמוד בהחזרים החודשיים של כולם, כיוון שמדובר בסכום חודשי גבוה מאד"
                />
            </Head>
            <WrapContentHead className="pt pb background-image background-image-loan">
                <Particle />
                <SectionTitleText data-aos="zoom-out" style={{zIndex: "2"}}>
                    <h1 style={{color:"white"}}>איחוד הלוואות</h1>
                </SectionTitleText>
                <EmBarBg data-aos="zoom-out" style={{zIndex: "2"}}/>
                <Container className="pt3" style={{zIndex: "2"}}>
                    <TextCenter>
                        <p>בכל משפחה המצבים הכלכליים משתנים מעת לעת עקב סיבות כאלו ואחרות. כאשר יש ללקוחות כמה וכמה הלוואות שהם לוו לאורך הזמן קשה להם לעמוד בהחזרים החודשיים של כולם, כיוון שמדובר בסכום חודשי גבוה מאד. לכן המגמה היא לבדוק אפשרות של איחוד הלוואות ופריסה מחודשת של ההתחייבויותוכך התשלום החודשי יהיה נמוך יותר. </p>
                    </TextCenter>
                </Container>
            </WrapContentHead>
            <WrapContent className="mt70">
                <Container>
                    <RegulaIcon
                        items={loanData}
                        resourceName="person"
                        itemComponent={LargeIconListItem}
                    />
                </Container>
            </WrapContent>
            <TextH5 data-aos="fade-up">קשה לכם לקבל החלטות בנושא המשכנתא ? בשביל זה אנו כאן בשבילכם. </TextH5>
        </>
    )
}

export default LoadConsolidation
