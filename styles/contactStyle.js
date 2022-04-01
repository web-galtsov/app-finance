import styled from "styled-components";
import { tabletMaxM, tabletMaxS } from "@/layout/screen-sizes";

export const RowCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center !important;
  @media screen and ${tabletMaxS} {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const ContactBgPositionAnim = styled.div`
  position: relative;
  overflow: hidden;
`;
export const FlexItemContact = styled.div`
  padding: 5px;
  max-width: 400px;
  width: 100%;
  margin: 30px auto;
  line-height: 150px;
  color: #000000;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  background-color: #f2f3f8;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 20px;
  box-shadow: 0 10px 30px 3px rgb(99 119 238 / 40%);
  transition: 0.5s;
  &&:hover {
    color: white;
    box-shadow: none;
    transform: translateY(-10px);
  }
  &&:hover p {
    color: white;
  }
  &&:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 11px;
    right: 11px;
    height: 3px;
    transition: 0.3s ease-in-out;
    background-color: #2a4098;
    z-index: -1;
    border-radius: 20px;
  }
  &&:hover:after {
    height: 100%;
    left: 0;
    right: 0;
  }
  @media screen and ${tabletMaxM} {
    margin: 10px auto;
  }
`;

export const AnimContactBackground = styled.div`
  position: relative;
  display: block !important;
  max-width: 682px;
  width: 100%;
  &&::before {
    content: "";
    position: absolute;
    background: #dedde7;
    top: -13%;
    right: 6%;
    width: 170px;
    height: 170px;
    opacity: 0.7;
    z-index: -1;
    border-radius: 50%;
    -webkit-animation: ripple 5s infinite;
    animation: ripple 5s infinite;
  }
  @keyframes ripple {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

export const FlexItemContactP = styled.p`
  line-height: 24px;
  color: #121212;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 400;
  direction: ltr;
  text-align: center;
`;
export const ContactWrapForm = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 20px;
`;
export const ContactFormTitle = styled.div`
  position: relative;
  width: 100%;
  text-align: right;
  margin-bottom: 40px;
  h2 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 15px;
    position: relative;
  }
`;
export const ContactFormTitleH6 = styled.div`
  color: #2a4098;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-left: 50px;
  display: inline-block;
  &&::after {
    top: 50%;
    background: rgba(42, 64, 152, 0.56);
    content: "";
    position: absolute;
    height: 1px;
    width: 30px;
    z-index: 0;
    transform: translateY(-50%);
    left: 0;
    box-sizing: border-box;
  }
`;
export const ContactFormDetail = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px 0 rgb(0 87 178 / 21%);
`;
export const ContactFormInput = styled.input`
  background: transparent;
  padding: 0 15px;
  font-size: 14px;
  width: 100%;
  height: auto;
  border: 1px solid #e1e1e1;
  min-height: 40px;
  border-radius: 10px;
`;
export const ContactFormTextarea = styled.textarea`
  background: transparent;
  padding: 5px 15px 0 15px;
  font-size: 14px;
  width: 100%;
  height: auto;
  border: 1px solid #e1e1e1;
  min-height: 40px;
  border-radius: 10px;
`;
export const ContactLoad = styled.div`
  position: absolute;
  right: 40px;
  bottom: -27px;
`;
export const ContactLoadLetter = styled.div`
  position: absolute;
  right: auto;
  left: auto;
  top: 50px;
`;

export const ContactMessageOk = styled.div`
  position: absolute;
  line-height: 1;
  top: 5px;
  right: 40px;
  left: auto;
`;
export const ContactMessageOkLetter = styled.div`
  position: absolute;
  line-height: 1;
  top: 72px;
  right: auto;
  left: auto;
`;
export const ContactBoxInfo = styled.div`
  display: block;
  position: relative;
  padding: 15px 20px;
  width: 100%;
  text-align: center;
  z-index: 1;
`;
export const FormBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  span {
    font-size: 0;
  }
  p {
    font-style: normal;
    margin-top: 11px;
    text-align: right;
    font-size: 14px;
    color: #222;
  }
`;
export const WrapLetter = styled.div`
  position: relative;
  -webkit-align-content: center;
  align-content: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 45px;
`;

export const ContentLetter = styled.div`
  width: 100%;
  display: flex;
`;

export const LetterInput = styled.input`
  background: white;
  padding: 8px 20px 8px 10px;
  width: 100%;
  height: auto;
  min-height: 40px;
  font-size: 13px;
  font-weight: 400;
  text-transform: none;
  border-radius: 0 20px 20px 0;
  border: none;
`;
export const LetterForm = styled.form`
  padding: 10px;
  border: 1px #000e42 solid;
  border-radius: 39px;
  background: #ffffff17;
  box-shadow: 4px 4px 12px #01071e8a;
`;
