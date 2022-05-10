import Image from "next/image";
import Link from "next/link";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {
    Container,
    WrapContent,
    FlexContainerN,
    Col6,
    BoxInfo,
    TextH6,
    TextH1,
    TextP, EmBar, EmBarBg, Button
} from "@/layout/Styles";

function HomeAbout() {
    return (
        <>
         <WrapContent className="pt pb background-grey">
            <Container>
              <FlexContainerN>
                <Col6 className="pl child--featured " >
                    <BoxInfo data-aos="fade-left">
                       {/* <TextH6>אודות החברה </TextH6>*/}
                       {/* <TextH1> סוסו פייננס - ייעוץ ומחזור משכנתאות ופיננסים
                            <span style={{color: "#d81f30", paddingRight: "2px"}}> והפיננסים? </span>
                        </TextH1>*/}
                        <TextH1>
                            <span style={{color: "#d81f30", paddingLeft: "4px"}}>
                                סוסופייננס
                            </span>
                             - נותנים כסף חכם!
                        </TextH1>
                        <TextH6>מה מניע אותי לעזור לאנשים בתחום המשכנתאות והפיננסים ?</TextH6>
                        <EmBar>
                            <EmBarBg/>
                        </EmBar>
                        <TextP>
                            סוסופייננס נולד כחזון של ילד שגדל בבית חד-הורי, ועבר את תלאות העליה. אימי התמודדה עם עול המשכנתא, וכבן בכור הבטחתי לעצמי שאעזור לה, ולכל אחד להתמודד עם המעמסה של המשכנתא.
                            לימים, בחרתי ללמוד ולהתמקצע בתחום הפיננסי, במטרה לסייע לכל אדם באשר הוא להבין מהו המושג ימשכנתאי, ולדעת מה הן האפשרויות אשר מעניקות בטחון כלכלי ורווחה עבור כל בעל משפחה ועסק.
                        </TextP>
                            <Link href='/about' passHref>
                                <Button className="mt40"><FaRegArrowAltCircleRight style={{display: "inline-block",fontSize: "1.15rem",marginLeft: "10px",verticalAlign: "middle"}}/>
                                    קרא עוד
                                </Button>
                            </Link>
                    </BoxInfo>
                </Col6>
                    <Col6 className="pr" data-aos="fade-right">
                        <Image
                            data-aos="fade-right"
                            priority src="/slider-rimg.webp"
                            alt="background-frame"
                            width={552}
                            height={652}
                            placeholder="blur"
                            blurDataURL="/slider-rimg.webp"
                           />
                   </Col6>
                </FlexContainerN>
            </Container>
         </WrapContent>
        </>
    )
}
export default HomeAbout
