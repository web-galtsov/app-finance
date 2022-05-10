import Link from 'next/link'
import Head from "next/head";

import {
    Container,
    FlexContainerN,
    WrapContent,
    Button
} from "@/layout/Styles";
import Image from "next/image";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import styled from "styled-components";

const BoxYoutube = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const NotFound = () => {
    return (
        <div>
            <Head>
                <title>סוסופייננס</title>
                <meta name="description" content="home" />
                <meta
                    name="description"
                    content="מחפשים הלוואה? תפנו רק אל מי שילווה אתכם לכל אורך התהליך ולא רק 'ילווה' לכם. אנו בסוסו פייננס נותנים ייעוץ וליווי פיננסי חוץ בנקאי כדי לעזור לכם להשיג ביטחון כלכלי אמיתי!"
                />
            </Head>
        <WrapContent className="pt pb background-grey">
            <Container>
                <FlexContainerN>
                    <BoxYoutube>
                        <h1 style={{display: "block"}}>אופס...</h1>
                        <h2 style={{display: "block"}}>לא ניתן למצוא את הדף הזה :</h2>
                        <p style={{ fontSize: "20px", textAlign: "center", paddingTop: "20px"}}>חזור אל</p>
                        <Link href='/' passHref>
                            <Button className="mt40">
                                <FaRegArrowAltCircleRight style={{display: "inline-block",fontSize: "1.15rem",marginLeft: "10px",verticalAlign: "middle"}}/>
                                ראשי
                            </Button>
                        </Link>
                        <div
                            style={{
                                maxWidth: "941px",
                                maxHeight: "434px",
                                position: "relative",
                                alignSelf: "center",
                                aspectRatio: "941/434",
                                margin: "auto"
                            }}
                        >
                            <Image
                                data-aos="fade-right"
                                src="/404.svg"
                                alt="background-404"
                                priority
                                width={941}
                                height={434}
                                quality={100}
                                placeholder="blur"
                                blurDataURL="/404.svg"
                            />
                        </div>
                    </BoxYoutube>
                </FlexContainerN>
            </Container>
        </WrapContent>
    </div>
    );
}

export default NotFound;
