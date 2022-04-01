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
    RowTem, TextH5
} from "@/layout/Styles";
import Image from "next/image";
import {RegularListOur} from "../components/OurServices/RegularListOur";
import {LargePersonListItem} from "../components/OurServices/LargePersonListItem";
import OurservicesYoutube from "../components/OurServices/OurservicesYoutube";
import {ourserviceData} from "../components/OurServices/ourservicesData"

const our_services = () => {
    return (
        <>
            <Head>
                <title>השירותים שלנו-סופייננס</title>
                <Meta
                    description="סוסו פייננס נולד כחזון של ילד שגדל בבית חד-הורי, ועבר את תלאות העליה. אימי התמודדה עם עול המשכנתא, וכבן בכור הבטחתי לעצמי שאעזור לה, ולכל אחד להתמודד עם המעמסה של המשכנתא."
                />
            </Head>
            <WrapContent className="pt pb background-grey">
                <Container>
                    <FlexContainerN>
                        <Col6 className="pl child--featured " >
                            <BoxInfo data-aos="fade-left">
                                <TextH1>
                                    השירותים שלנו
                                </TextH1>
                                <EmBar>
                                    <EmBarBg/>
                                </EmBar>
                                <TextP>
                                    סוסו פייננס נולד כחזון של ילד שגדל בבית חד-הורי, ועבר את תלאות העליה. אימי התמודדה עם עול המשכנתא, וכבן בכור הבטחתי לעצמי שאעזור לה, ולכל אחד להתמודד עם המעמסה של המשכנתא.
                                    לימים, בחרתי ללמוד ולהתמקצע בתחום הפיננסי, במטרה לסייע לכל אדם באשר הוא להבין מהו המושג ימשכנתאי, ולדעת מה הן האפשרויות אשר מעניקות בטחון כלכלי ורווחה עבור כל בעל משפחה ועסק.
                                </TextP>
                            </BoxInfo>
                        </Col6>
                        <Col6 className="pr" data-aos="fade-right">
                            <Image
                                data-aos="fade-right"
                                src="/home-16-left-image.png"
                                alt="background-frame"
                                width={513}
                                height={473}
                                placeholder="blur"
                                blurDataURL="/home-16-left-image.png"
                            />
                        </Col6>
                    </FlexContainerN>
                </Container>
            </WrapContent>
            <WrapContent className="pt pb background-white">
                <Container>
                    <RowTem style={{justifyContent: "center"}}>
                  <RegularListOur
                      items={ourserviceData}
                      resourceName= "person"
                      itemComponent={LargePersonListItem}
                  />
                    </RowTem>
                </Container>
            </WrapContent>
            <OurservicesYoutube/>
        </>
    )
}

export default our_services
