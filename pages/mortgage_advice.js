import React from "react";
import Meta from '@/layout/Meta';
import Head from "next/head";
import {mortgageData, adviceData} from "../components/MortgageAdvice/DataMortgage";
import {
    WrapContent,
    BoxInfo,
    Column1, Column2,
    Container,
    EmBar, EmBarBg,
    FlexContainerN,
    ImgWrap,
    InfoContainer,
    InfoRow,
    SingleImage,
    TextH1,
    TextH6,
    TextP,
    SectionTitleText, TextH5,
} from "@/layout/Styles";
import Image from "next/image";
import { LargeIconListItem } from "../components/MortgageAdvice/LargeIconListItem";
import {RegulaIcon} from "../components/MortgageAdvice/RegulaIcon";

const Mortgage = () => {

    return (
        <>
            <Head>
                <title>ייעוץ משכנתאות-וסופייננס</title>
                <Meta
                    description="ייעוץ משכנתאות הוא בעל חשיבות גבוהה מאד כיוון שיועץ המשכנתאות מייצג את האינטרס של הלקוח מול הבנק, כדי להשיג את התנאים הטובים ביותר לכל לקוח,ההכוונה בנושא משכנתא,ההכוונה בנושא משכנתא,מהם אחוזי המימון המקסימליים מתוך שוויו של הנכס,משכנתא בסכום מקסימלי"
                />
            </Head>
            { mortgageData.map((item,pos) => {
                const {lightBg, id, imgStart, topLine,lightText,headLine, darkText, description, img,alt} = item
                return (
                    <InfoContainer key={item.id} lightBg={lightBg} className="pt120 pb hisfull_about_area">
                        <Container key={item.id}>
                            <FlexContainerN imgStart={imgStart} key={item.id} >
                                <InfoRow imgStart={imgStart}>
                                    <Column1 data-aos="fade-left">
                                        <BoxInfo>
                                            <TextH6>{topLine}</TextH6>
                                            <TextH1  lightText={lightText}>{headLine}</TextH1>
                                            <EmBar>
                                                <EmBarBg/>
                                            </EmBar>
                                            <TextP  key={item.id} darkText={darkText}>
                                                <ul>
                                                    {description.map((description,index) =>
                                                        <li key={index}>{description}</li>
                                                    )}
                                                </ul>
                                            </TextP>
                                        </BoxInfo>
                                    </Column1>
                                    <Column2 data-aos="fade-right">
                                        <ImgWrap>
                                            <SingleImage>
                                                <Image
                                                    priority
                                                    src={img}
                                                    alt={alt}
                                                />
                                            </SingleImage>
                                        </ImgWrap>
                                    </Column2>
                                </InfoRow>
                            </FlexContainerN>
                        </Container>
                    </InfoContainer>
                )
            })}
            <WrapContent className="pt pb background-white">
                <SectionTitleText data-aos="zoom-out">
                    <h1>משכנתאות</h1>
                </SectionTitleText>
                <EmBarBg data-aos="zoom-out"/>
                <Container className="pt3">
                    <RegulaIcon
                        items={adviceData}
                        resourceName="person"
                        itemComponent={LargeIconListItem}
                    />
                </Container>
                <TextH5 data-aos="fade-up">קשה לכם לקבל החלטות בנושא המשכנתא ? בשביל זה אנו כאן בשבילכם. </TextH5>
            </WrapContent>
        </>
    )
}

export default Mortgage
