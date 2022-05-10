import { useState } from 'react';
import styled from 'styled-components';
import {MdPlayArrow, MdClose} from "react-icons/md";
import YouTube from "react-youtube"

const ModalBackground = styled.div`
  position: fixed;
  z-index: 40;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  width: 100%;
  max-width: 900px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
  padding-top: 8%;
`;
const CloseButton = styled.button`
  right: -3px;
  cursor: pointer;
  background-color: #222;
  border: none;
  color: white;
  position: absolute;
  top: 96px;
  border-radius: 50%;
  padding-top: 6px;
  width: 48px;
  transition: .5s;
  :hover {
    background-color: #2C3F98;
  }
`;

const MainVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  div {
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  button {
    width: 90px;
    height: 90px;
    line-height: 100px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    position: relative;
    color: #0c5adb;
    -webkit-animation: ripple-white 1s linear infinite;
    animation: ripple-blue 1s linear infinite;
    -webkit-transition: .5s;
    background: #fff;
    font-size: 50px;
    z-index: 44;
    cursor: pointer;
  }
  @-webkit-keyframes ripple-blue {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0.3), 0 0 0 10px rgba(255,255,255, 0.3), 0 0 0 20px rgba(255,255,255, 0.3);
      box-shadow: 0 0 0 0 rgba(255,255,255, 0.3), 0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 0 20px rgba(255,255,255, 0.3)
    }
    100% {
      -webkit-box-shadow: 0 0 0 10px rgba(255,255,255, 0.3), 0 0 0 20px rgba(255, 255, 255, 0.3), 0 0 0 30px rgba(255, 255, 255, 0);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 0 20px rgba(255, 255, 255, 0.3), 0 0 0 30px rgba(255, 255, 255, 0)
    }
  }
  @keyframes ripple-blue {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0.3), 0 0 0 10px rgba(255,255,255, 0.3), 0 0 0 20px rgba(255,255,255, 0.3);
      box-shadow: 0 0 0 0 rgba(255,255,255, 0.3), 0 0 0 10px rgba(255,255,255, 0.3), 0 0 0 20px rgba(255,255,255, 0.3)
    }
    100% {
      -webkit-box-shadow: 0 0 0 10px rgba(255,255,255, 0.3), 0 0 0 20px rgba(255,255,255, 0.3), 0 0 0 30px rgba(255,255,255, 0);
      box-shadow: 0 0 0 10px rgba(255,255,255, 0.3), 0 0 0 20px rgba(255,255,255, 0.3), 0 0 0 30px rgba(255,255,255, 0)
    }
  }
`;

export const VideoModal = () => {
    const [shouldShow, setShouldShow] = useState(false);
    const opts = {
        height: '615px',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <>
            <MainVideo>
                <div>
                   <button onClick={() => setShouldShow(true)} aria-label ="play YouTube"><MdPlayArrow/></button>
                </div>
            </MainVideo>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={() => setShouldShow(false)}><MdClose/></CloseButton>
                        <YouTube videoId="zG6r0DjPCqw"
                                 opts={opts}
                                 name="סרטון תדמית - סוסופייננס"
                                />
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}
