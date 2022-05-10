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

const word = ' היא להשיג עבורכם ביטחון כלכלי וחסכון של כ 100,000 ש"ח!' // eslint-disable-next-line
function HomeWhy() {
    return (
        <>
            <WrapContent className="pt pb">
                <Container>
                    <FlexContainerN className="column-reverse">
                        <Col6 className="pl" data-aos="fade-left">
                            <Image
                                src="/banner-img.webp"
                                alt="background-frame"
                                placeholder="blur"
                                width={677}
                                height={580}
                                blurDataURL="/banner-img.webp"
                                priority
                            />
                        </Col6>
                        <Col6 className="pr"  data-aos="fade-right">
                            <BoxInfo>
                               {/* <TextH6>אודות החבר</TextH6>*/}
                                <TextH1>המטרה שלי </TextH1>
                                <TextH6>
                                    {word}
                                    {/* היא להשיג עבורכם ביטחון כלכלי וחסכון של כ 100,000 ש"ח!*/}
                                  </TextH6>
                                <EmBar>
                                    <EmBarBg/>
                                </EmBar>
                                <TextP>
                                    חברת סוסופייננס הינה גוף ייעוץ חוץ בנקאי המתמחה בענף המשכנתאות והבנקאות למגזר הפרטי והעסקי בישראל. האינטרס שלנו הוא לדאוג ללקוח בכך שיוכל לקבל מהבנק את הסכום הנדרש לו,ולהחזירו בתנאים הטובים ביותר.
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
