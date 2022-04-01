import Image from "next/image";
import {routesData } from "./DataRecom";
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
    WitrShapeItemInner,
    SingleImgAni,
    SingleImage
} from "@/layout/Styles";


const MortgageRoutes = () => {
    return (
        <>
            { routesData.map((item,pos) => {
                const {lightBg,  imgStart, topLine,lightText,headLine, darkText, description, img,alt, shape, width, height,left,right, top} = item
                return (
                    <InfoContainer  key={item.id} lightBg={lightBg} className="pt120 pb hisfull_about_area">
                        <Container key={pos.id}>
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
                                                    {description.map(description =>
                                                        <li key={description}>{description}</li>
                                                    )}
                                                </ul>
                                            </TextP>
                                        </BoxInfo>
                                    </Column1>
                                    <Column2 data-aos="fade-right">
                                        <ImgWrap>
                                            <WitrShapeItemInner className="witr_shape_item" right={right} left={left} top={top}>
                                                <SingleImgAni>
                                                    <Image
                                                        layout="responsive"
                                                        src={shape}
                                                        alt={alt}
                                                        width={width}
                                                        height={height}
                                                    />
                                                </SingleImgAni>
                                            </WitrShapeItemInner>
                                            <SingleImage>
                                                <Image
                                                    layout="responsive"
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

export default MortgageRoutes
