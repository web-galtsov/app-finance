import React from "react";
import Meta from '@/layout/Meta';
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const MortgageRoutes = dynamic(() => import("../components/RecommendedMortgages/MortgageRoutes"));
const MortgageRecomend = dynamic(() => import("../components/RecommendedMortgages/MortgageRecomend"));
const MortgageRoutesCenter = dynamic(() => import("../components/RecommendedMortgages/MortgageRoutesCenter"));

import {
    Container,
    EmBarBg,
    SectionTitleText, TextH5,
    WrapContent
} from "@/layout/Styles";
import styled from "styled-components";

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
const SingleSliderRot = styled.div`
  position: absolute;
  bottom: -240px;
  left: -10%;
  z-index: 2;
`;


 const mortgage_routes = () => {
    return (
        <>
            <Head>
                <title>מסלולי המשכנתאות-וסופייננס</title>
                <Meta
                    description="משכנתא היא נושא משמעותי ביותר בכל משפחה, כיוון שיש לכך השלכות לטווח הארוך,משכנתא היא נושא משמעותי ביותר בכל משפחה, כיוון שיש לכך השלכות לטווח הארוך,מסלולי המשכנתאות,תמהילים שונים של המשכנתאות,לכן לפני הגשת בקשה לקבלת משכנתא יש לבחון נושא זה מכל היבטיו ועל כל השלכותיו באמצעות אנשי מקצוע מהשורה הראשונה"
                />
            </Head>
            <WrapContent className="pt pb background-image background-image-routes">
                   <SingleSliderRot className="rotateme">
                        <Image
                            src="/sdt.webp"
                            alt="sdt"
                            placeholder="blur"
                            blurDataURL="/sdt.webp"
                            width={872}
                            height={870}
                            priority
                        />
                    </SingleSliderRot>
                    <SectionTitleText data-aos="zoom-out" style={{zIndex: "2"}}>
                        <h1 style={{color:"white"}}>תמהיל מומלץ של משכנתא </h1>
                    </SectionTitleText>
                    <EmBarBg data-aos="zoom-out" style={{zIndex: "2"}}/>
                    <Container className="pt3" style={{zIndex: "2"}}>
                        <TextCenter>
                            <p>משכנתא היא נושא משמעותי ביותר בכל משפחה, כיוון שיש לכך השלכות לטווח הארוך. לכן לפני הגשת בקשה לקבלת משכנתא יש לבחון נושא זה מכל היבטיו ועל כל השלכותיו באמצעות אנשי מקצוע מהשורה הראשונה. הם יעניקו לכם ייעוץ פרטני בהתאם לנתונים הממון האישיים שלכם ולמידע על הנכס שאתם רוכשים.</p>
                            <p>אנחנו כאן כדי להשיג עבורכם את התמהיל האידאלי של המשכנתא בהתאמה מיטבית עבורכם ובתנאים המסחריים הנוחים והזולים ביותר שאפשר לקבל במשק.</p>
                        </TextCenter>
                    </Container>
            </WrapContent>
            <MortgageRoutes/>
            <MortgageRoutesCenter/>
            <MortgageRecomend/>
            <TextH5 data-aos="fade-up">קשה לכם לקבל החלטות בנושא המשכנתא ? בשביל זה אנו כאן בשבילכם. </TextH5>
        </>
    )
}

export default mortgage_routes
