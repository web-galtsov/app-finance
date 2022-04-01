import Image from "next/image";
import {deniersData1} from "./deniersData";
import {
    Container,
    FlexContainerN,
    BoxInfo,
    TextH6,
    TextH1,
    TextP,
    EmBar,
    EmBarBg,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    InfoContainer,
    SingleImage
} from "@/layout/Styles";


const DeniersNegative = () => {
    return (
        <>
            { deniersData1.map((item,pos) => {
                const {lightBg, imgStart, topLine,lightText,headLine, darkText, description, img,alt} = item
                return (
                    <InfoContainer  key={item.id} lightBg={lightBg} className="pt120 pb hisfull_about_area">
                        <Container key={item.id}>
                            <FlexContainerN imgStart={imgStart} key={item.id}>
                                <InfoRow imgStart={imgStart}>
                                    <Column1 data-aos="fade-left">
                                        <BoxInfo>
                                            <TextH6>{topLine}</TextH6>
                                            <TextH1  lightText={lightText}>{headLine}</TextH1>
                                            <EmBar>
                                                <EmBarBg/>
                                            </EmBar>
                                            <TextP darkText={darkText} key={item.id}>
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
        </>
    )
}

export default DeniersNegative
