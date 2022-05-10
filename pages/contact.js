import Meta from "@/layout/Meta";
import Head from "next/head";
import Image from "next/image";
import contactData from "../components/Contact/DataContact";

import {
  AnimContactBackground,
  FlexItemContact,
  FlexItemContactP,
  ContactBgPositionAnim,
} from "../styles/contactStyle";
import {
  Container,
  WrapContent,
  Row,
  Col6,
  EmBar,
  EmBarBg,
  FlexContainer,
  FlexItemIcon,
  FlexItemTitle,
  SectionTitleText,
} from "@/layout/Styles";
import ContactB from "../components/ContactB";
import React from "react";

function contact() {
  return (
    <>
      <Head>
        <title>צור קשר - וסופייננס</title>
        <Meta description="תשואות פיננסים הינה חברה מובילה בתחומה, היועצים בחברה יוצאי המערכת הבנקאית, חברי התאחדות יועצי המשכנתאות ובעלי וותק וניסיון עשיר בעולם הפיננסי." />
      </Head>
        <ContactBgPositionAnim>
        <div className="background-shape-3">
          <div className="cube" /><div className="cube" /><div className="cube" /><div className="cube" /> <div className="cube" /><div className="cube" /><div className="cube" /><div className="cube" /><div className="cube" /><div className="cube" />{" "}
        </div>
        <WrapContent className="pt pb background-grey">
          <SectionTitleText>
           <h1>צור קשר</h1>
          </SectionTitleText>
          <EmBar>
            <EmBarBg />
          </EmBar>
          <Container className="pt">
            <FlexContainer data-aos="zoom-in">
              {contactData.map((item, pos) => {
                const {
                  icon,
                  address,
                  addressLink1,
                  addressLink2,
                  arialLabel,
                  linkA1,
                  linkA2,
                } = item;
                return (
                  <FlexItemContact data-aos="fade-left" key={pos}>
                    <FlexItemIcon>{icon}</FlexItemIcon>
                    <FlexItemTitle>{address}</FlexItemTitle>
                    <FlexItemContactP>
                      <a href={linkA1} aria-label={arialLabel}>
                        {addressLink1}
                      </a>
                      <br />
                      <a href={linkA2} aria-label={arialLabel}>
                        {addressLink2}
                      </a>
                    </FlexItemContactP>
                  </FlexItemContact>
                );
              })}
            </FlexContainer>
          </Container>
        </WrapContent>
        <WrapContent className="pt pb">
          <Container>
            <Row>
              <ContactB />
              <Col6 className="pr" data-aos="fade-right">
                <AnimContactBackground>
                      <Image
                      src="/contact-img.png"
                      alt="background-frame"
                      placeholder="blur"
                      blurDataURL="/contact-img.png"
                      width={587}
                      height={444}
                      priority
                    />
                </AnimContactBackground>
              </Col6>
            </Row>
          </Container>
        </WrapContent>
      </ContactBgPositionAnim>
    </>
  );
}

export default contact;
