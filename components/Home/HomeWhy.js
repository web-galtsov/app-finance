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
    TextP,
    EmBar,
    EmBarBg,
    Button,
} from "@/layout/Styles";

function HomeWhy() {
    return (
        <>
            <WrapContent className="pt pb">
                <Container>
                    <FlexContainerN className="column-reverse">
                        <Col6 className="pl" data-aos="fade-left">
                            <Image
                                priority
                                src="/banner-img.png"
                                alt="background-frame"
                                width="677"
                                height="580"
                                placeholder="blur"
                                blurDataURL="/banner-img.png"
                            />
                        </Col6>
                        <Col6 className="pr"  data-aos="fade-right">
                            <BoxInfo>
                                <TextH6>אודות החבר</TextH6>
                                <TextH1>למה אנחנו?</TextH1>
                                <EmBar>
                                    <EmBarBg/>
                                </EmBar>
                                <TextP>
                                    תשואות פיננסים הינה אחת מחברות ייעוץ המשכנתאות המוערכות ביותר בישראל. בעלי החברה יוצאי המערכת הבנקאית אשר כיהנו בתפקידי מפתח בבנקים השונים בתחום האשראי והמשכנתאות. כמו כן, היועצים בחברה חברים בהתאחדות יועצי המשכנתאות
                                </TextP>
                                <Link href='/about' passHref>
                                    <Button className="mt40"><FaRegArrowAltCircleRight style={{display: "inline-block",fontSize: "1.15rem",marginLeft: "10px",verticalAlign: "middle"}}/>
                                        קרא עוד
                                    </Button>
                                </Link>
                            </BoxInfo>
                        </Col6>
                    </FlexContainerN>
                </Container>
            </WrapContent>
        </>
    )
}
export default HomeWhy
