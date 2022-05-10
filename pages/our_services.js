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

const word1 = 'ה "אני מאמין " שלנו: ' // eslint-disable-next-line
const word2 = '    להעניק ערך אמיתי ללקוחותינו ולעשות השתדלות מקסימלית  לעזור לכל אחד בתחום משכנתאות והפיננסים. אנחנו רוצים לעשות לכם את התהליך כמה שיותר פשוט וקל.ייעוץ ראשוני ללא תשלום וללא מקדמה – שכר טרחה ישולם לנו על בסיס הצלחה בלבד!\n' +
    '                                    אם לא הצלחנו בעבודתנו עבדנו לחינם ונשאר חברים :)' // eslint-disable-next-line
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
                                <TextH1> {word1} </TextH1>
                                <EmBar>
                                    <EmBarBg/>
                                </EmBar>
                                <TextP>
                                    {word2}

                                </TextP>
                            </BoxInfo>
                        </Col6>
                        <Col6 className="pr" data-aos="fade-right">
                               <Image
                                    data-aos="fade-right"
                                    src="/home-16-left-image.webp"
                                    alt="background-frame"
                                    placeholder="blur"
                                    blurDataURL="/home-16-left-image.webp"
                                    width={513}
                                    height={473}
                                    priority
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
