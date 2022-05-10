import Image from "next/image";
import aboutData from "./Data";
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

export default function  AboutInfoSection() {
return (
    <>
        { aboutData.map((item,pos) => {
            const {lightBg, id, imgStart, topLine,lightText,headLine, description, img,alt, shape, width, height,left,right, top} = item
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
                                        <TextP  key={item.id}>{description}</TextP>
                                    </BoxInfo>
                                </Column1>
                                <Column2 data-aos="fade-right">
                                    <ImgWrap>
                                        <WitrShapeItemInner className="witr_shape_item" right={right} left={left} top={top}>
                                            <SingleImgAni>
                                                    <Image
                                                        src={shape}
                                                        alt={alt}
                                                        width={width}
                                                        height={height}
                                                        priority
                                                    />
                                            </SingleImgAni>
                                        </WitrShapeItemInner>
                                        <SingleImage>
                                            <Image
                                                src={img}
                                                alt={alt}
                                                priority
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
)}

