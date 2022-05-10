import React from "react";
import Meta from '@/layout/Meta';
import Head from "next/head";
import {
    BoxInfo,
    Col6,
    Container,
    EmBar,
    EmBarBg,
    FlexContainerN,
    TextH1,
    TextP,
    WrapContent,
    RowTem,
    TextH5
} from "@/layout/Styles";
import Image from "next/image";
import {RegularListDeniers} from "../components/MortgageDeniers/RegularListDeniers";
import {DeniersPersonListItem} from "../components/MortgageDeniers/DeniersPersonListItem";
import {deniersData} from "../components/MortgageDeniers/deniersData"
import styled from "styled-components";
import dynamic from "next/dynamic";
const DeniersNegative = dynamic(() => import("../components/MortgageDeniers/DeniersNegative"));

const WitrShapeItem = styled.div`
  position: absolute;
  left: 32px;
  top: 25px;
  z-index: -1;
  content: "";
  transition: .5s;
  animation: witr_movelr_box45 5s linear 1s infinite alternate running;
  @keyframes witr_movelr_box45 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(45px);
    }
  }
  @keyframes witr_movelr_box90 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(90px);
    }
  }
  @keyframes witr_movelr_box180 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(180px);
    }
  }
  @keyframes witr_movelr_box360 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(360px);
    }
  }
  
`;


const mortgage_deniers = () => {
    return (
        <>
            <Head>
                <title>מסורבי משכנתא - וסופייננס</title>
                <Meta
                    description="מי שמעוניין לרכוש דירה זקוק ברוב המקרים למשכנתא כדי להשלים את תשלום יתרת הכספים עבורמטרה זו,משכנתא למסורבי משכנתא,פילוח של מסורבי משכנתא,היסטוריה שלילית של נושא האשראי,הכוונה של יועץ משכנתאות,קבלת משכנתא עבור מסורבי משכנתא"
                />
            </Head>
            <WrapContent className="pt pb background-grey">
                <Container>
                    <FlexContainerN>
                        <Col6 className="pl child--featured " >
                            <BoxInfo data-aos="fade-left" className="pt-92">
                                <TextH1>
                                    מסורבי משכנתא
                                </TextH1>
                                <EmBar>
                                    <EmBarBg/>
                                </EmBar>
                                <TextP>
                                    <p>מי שמעוניין לרכוש דירה זקוק ברוב המקרים למשכנתא כדי להשלים את תשלום יתרת הכספים עבור
                                        מטרה זו. לא אחת נוצרים מצבים שבהם הבנקים אינם מאשרים ללקוח מסוים משכנתא עקב סיבות
                                        שונות הקשורות להתנהלות פיננסית לקויה בעבר, הודעה של BDI על בעיות באשראי, או סיבות נוספות.</p>
                                    <p>במצבים האלו לקוחות רבים מתייאשים וחושבים שלא יצליחו לממש את החלום שלהם לרכישת דירה
                                        לאור סירוב זה. אך חשוב לדעת שגם מסורבי משכנתא מסוגלים לקבל הלוואות שונות ובאמצעותן הם
                                        יוכלו לקנות את הדירה שתכננו.</p>
                                </TextP>
                            </BoxInfo>
                        </Col6>
                        <Col6 className="pr" data-aos="fade-right">
                            <WitrShapeItem>
                                   <Image
                                        src="/shapen.webp"
                                        alt="background-frame"
                                        placeholder="blur"
                                        blurDataURL="/shapen.webp"
                                        width={498}
                                        height={545}
                                        priority
                                    />
                            </WitrShapeItem>
                               <Image
                                    data-aos="fade-right"
                                    src="/shapenpic.webp"
                                    alt="background-frame"
                                    width={498}
                                    height={545}
                                    placeholder="blur"
                                    blurDataURL="/shapenpic.webp"
                                    priority
                                />
                        </Col6>
                    </FlexContainerN>
                </Container>
            </WrapContent>
            <WrapContent className="pt pb background-white">
                <Container>
                    <RowTem style={{justifyContent: "center"}}>
                        <RegularListDeniers
                            items={deniersData}
                            resourceName= "person"
                            itemComponent={DeniersPersonListItem}
                        />
                    </RowTem>
                </Container>
            </WrapContent>
          <DeniersNegative/>
            <TextH5 data-aos="fade-up">קשה לכם לקבל החלטות בנושא המשכנתא ? בשביל זה אנו כאן בשבילכם. </TextH5>
        </>
    )
}

export default mortgage_deniers
