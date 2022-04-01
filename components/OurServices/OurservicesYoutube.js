import Image from "next/image";
import {
    Container,
    WrapContent,
    FlexContainerN
} from "@/layout/Styles";
import styled from "styled-components";
import {VideoModal} from "./VideoModal"

const BoxYoutube = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const BoxBg = styled.div`
  background: rgba(0, 0, 0, 0)  no-repeat scroll center center;
  content: "";
  position: absolute;
  top: 3px;
  left: 39px;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.15;
  animation: ripple 5s infinite;
  @keyframes ripple{0%{transform: scale(0.8);}50%{transform: scale(1.25);}100%{transform: scale(0.8);}}
  .download-app-box { margin-bottom: 50px; }
  .download-app-box .app-icon {
    background: rgba(91, 111, 230, 0.2);
    border-radius: 50%;
    height: 80px;
    width: 80px;
    line-height: 80px;
    text-align: center;
    float: left;
    -webkit-box-shadow: 0 2px 13px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 2px 13px rgba(0, 0, 0, 0.25);
    box-shadow: 0 2px 13px rgba(0, 0, 0, 0.25);
  }
`;

export default function OurservicesYoutube() {
    return (
        <>
            <WrapContent className="pt pb background-grey">
                <Container>
                    <FlexContainerN>
                        <VideoModal/>
                        <BoxBg>
                            <Image src="/app-bg.svg" alt="background-frame" width={650} height={650}/>
                        </BoxBg>
                        <BoxYoutube>
                            <Image data-aos="fade-right" src="/undraw_revenue_re_2bmg.svg" alt="background-frame" width={602} height={696}/>
                        </BoxYoutube>
                    </FlexContainerN>
                </Container>
            </WrapContent>
        </>
    )
}
